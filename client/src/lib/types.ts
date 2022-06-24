export type MessageAction =
	| "send-message"
	| "join-room"
	| "server-update-count"
	| "room-update-count";
export interface MessageData {
	action: MessageAction;
	author: string;
	content: string;
}
