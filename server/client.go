package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

const (
	readWait       = 60 * time.Second
	writeWait      = 10 * time.Second
	ping           = (readWait * 9) / 10
	maxMessageSize = 1024
)

type Client struct {
	ws   *websocket.Conn
	send chan []byte
	hub  *Hub
	room *Room
}

func NewClient(hub *Hub, ws *websocket.Conn) *Client {
	room := hub.findRoom("core")
	if room == nil {
		room = hub.createRoom("core")
	}

	return &Client{
		ws:   ws,
		send: make(chan []byte),
		hub:  hub,
		room: room,
	}
}

func (client *Client) disconnect() {
	go client.hub.unregisterClient(client)
	go client.room.unregisterClient(client)

	close(client.send)
	client.ws.Close()
}

func (client *Client) joinRoom(id string) {
	room := client.hub.findRoom(id)
	if room == nil {
		room = client.hub.createRoom(id)
	}

	client.room.unregisterClient(client)

	client.room = room
	room.register <- client
}

func (client *Client) handleMessage(raw []byte) {
	message := decode(raw)

	switch message.Action {
	case SendMessageAction:
		client.room.broadcast <- &message
	case JoinRoomAction:
		client.joinRoom(message.Content)
	}
}

func (client *Client) readPump() {
	defer func() {
		client.disconnect()
	}()

	client.ws.SetReadLimit(maxMessageSize)
	client.ws.SetReadDeadline(time.Now().Add(readWait))
	client.ws.SetPongHandler(func(string) error {
		client.ws.SetReadDeadline(time.Now().Add(readWait))
		return nil
	})

	for {
		_, message, err := client.ws.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}

		client.handleMessage(message)
	}
}

func (c *Client) writePump() {
	ticker := time.NewTicker(ping)
	defer func() {
		ticker.Stop()
		c.ws.Close()
	}()

	for {
		select {
		case message, ok := <-c.send:
			c.ws.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				c.ws.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := c.ws.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}

			w.Write(message)
			n := len(c.send)
			for i := 0; i < n; i++ {
				w.Write([]byte{'\n'})
				w.Write(<-c.send)
			}

			if err := w.Close(); err != nil {
				return
			}
		case <-ticker.C:
			c.ws.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.ws.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

func serve(hub *Hub, w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal("upgrader: ", err)
		return
	}

	client := NewClient(hub, ws)
	go hub.registerClient(client)
	go hub.findRoom("core").registerClient(client)

	go client.readPump()
	go client.writePump()
}
