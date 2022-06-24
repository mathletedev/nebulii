import { Component, createEffect, createSignal, Show } from "solid-js";

import Chat from "./components/Chat";
import Enter from "./components/Enter";
import Sidebar from "./components/Sidebar";
import client from "./lib/client";
import { MessageData } from "./lib/types";

const App: Component = () => {
	const [name, setName] = createSignal("");
	const [entered, setEntered] = createSignal(false);
	const [messages, setMessages] = createSignal<MessageData[]>([]);
	const [spaces, setSpaces] = createSignal<string[]>([]);
	const [currentSpace, setCurrentSpace] = createSignal("core");
	const [serverOnlineCount, setServerOnlineCount] = createSignal(0);
	const [roomOnlineCount, setRoomOnlineCount] = createSignal(0);

	client.onmessage = e => {
		const message = JSON.parse(e.data) as MessageData;
		switch (message.action) {
			case "send-message":
				setMessages(v => [...v, message]);
				break;
			case "server-update-count":
				setServerOnlineCount(parseInt(message.content));
				break;
			case "room-update-count":
				setRoomOnlineCount(parseInt(message.content));
				break;
			default:
				break;
		}
	};

	createEffect(() => {
		client.send(
			JSON.stringify({
				action: "join-room",
				author: "",
				content: currentSpace()
			} as MessageData)
		);
		setMessages([]);
	});

	return (
		<Show
			when={entered()}
			fallback={
				<Enter name={name()} setName={setName} setEntered={setEntered} />
			}
		>
			<div class="h-full flex">
				<Sidebar
					spaces={spaces()}
					setSpaces={setSpaces}
					currentSpace={currentSpace()}
					setCurrentSpace={setCurrentSpace}
					serverOnlineCount={serverOnlineCount()}
					roomOnlineCount={roomOnlineCount()}
				/>
				<Chat
					name={name()}
					messages={messages()}
					currentSpace={currentSpace()}
				/>
			</div>
		</Show>
	);
};

export default App;
