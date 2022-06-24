package main

import (
	"encoding/json"
	"log"
)

const (
	SendMessageAction       = "send-message"
	JoinRoomAction          = "join-room"
	ServerUpdateCountAction = "server-update-count"
	RoomUpdateCountAction   = "room-update-count"
)

type Message struct {
	Action  string `json:"action"`
	Author  string `json:"author"`
	Content string `json:"content"`
}

func NewMessage(action string, author string, content string) *Message {
	return &Message{
		Action:  action,
		Author:  author,
		Content: content,
	}
}

func (message *Message) encode() []byte {
	json, err := json.Marshal(message)
	if err != nil {
		log.Println("encoder: ", err)
	}

	return json
}

func decode(raw []byte) Message {
	var message Message
	if err := json.Unmarshal(raw, &message); err != nil {
		log.Println("decoder: ", err)
	}

	return message
}
