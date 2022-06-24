package main

import (
	"log"
	"net/http"
	"os"
	"strings"

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
		if strings.Contains(r.Header.Values("Connection")[0], "Upgrade") {
			serve(hub, w, r)
			return
		}

		http.Redirect(w, r, "https://mathletedev.github.io/nebulii", http.StatusSeeOther)
	})

	port := os.Getenv("PORT")
	log.Println("🚀 server started on port " + port)

	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal("server: ", err)
	}
}
