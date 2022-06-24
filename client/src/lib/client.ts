export default new WebSocket(
	process.env.NODE_ENV === "production"
		? "wss://nebulii.herokuapp.com"
		: "ws://localhost:8080"
);
