package main

import (
	"strconv"
)

type Hub struct {
	clients    map[*Client]bool
	register   chan *Client
	unregister chan *Client
	rooms      map[*Room]bool
}

func NewHub() *Hub {
	return &Hub{
		clients: make(map[*Client]bool),
		rooms:   make(map[*Room]bool),
	}
}

func (hub *Hub) findRoom(id string) *Room {
	var res *Room
	for room := range hub.rooms {
		if room.id == id {
			res = room
			break
		}
	}

	return res
}

func (hub *Hub) createRoom(id string) *Room {
	room := NewRoom(id)
	go room.run()
	hub.rooms[room] = true

	return room
}

func (hub *Hub) deleteRoom(id string) {
	room := hub.findRoom(id)
	if _, ok := hub.rooms[room]; ok {
		delete(hub.rooms, room)
	}
}

func (hub *Hub) registerClient(client *Client) {
	hub.clients[client] = true
	hub.updateCount()
}

func (hub *Hub) unregisterClient(client *Client) {
	if _, ok := hub.clients[client]; ok {
		delete(hub.clients, client)
	}
	hub.updateCount()
}

func (hub *Hub) broadcastToClients(message []byte) {
	for client := range hub.clients {
		client.send <- message
	}
}

func (hub *Hub) updateCount() {
	hub.broadcastToClients(NewMessage(ServerUpdateCountAction, "", strconv.Itoa(len(hub.clients))).encode())
}
