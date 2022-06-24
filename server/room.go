package main

import (
	"strconv"
)

type Room struct {
	id         string
	clients    map[*Client]bool
	register   chan *Client
	unregister chan *Client
	broadcast  chan *Message
}

func NewRoom(id string) *Room {
	return &Room{
		id:         id,
		clients:    make(map[*Client]bool),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		broadcast:  make(chan *Message),
	}
}

func (room *Room) run() {
	for {
		select {
		case client := <-room.register:
			room.registerClient(client)
		case client := <-room.unregister:
			room.unregisterClient(client)
		case message := <-room.broadcast:
			room.broadcastToClients(message.encode())
		}
	}
}

func (room *Room) registerClient(client *Client) {
	room.clients[client] = true
	room.updateCount()
}

func (room *Room) unregisterClient(client *Client) {
	if _, ok := room.clients[client]; ok {
		delete(room.clients, client)
	}
	room.updateCount()
}

func (room *Room) broadcastToClients(message []byte) {
	for client := range room.clients {
		client.send <- message
	}
}

func (room *Room) updateCount() {
	room.broadcastToClients(NewMessage(RoomUpdateCountAction, "", strconv.Itoa(len(room.clients))).encode())
}
