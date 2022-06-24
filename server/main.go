package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func main() {
	hub := newHub()
	go hub.run()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		serve(hub, w, r)
	})

	port := os.Getenv("PORT")
	log.Println("🚀 server started on port " + port)

	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal("server: ", err)
	}
}
