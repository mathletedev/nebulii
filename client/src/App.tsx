import {
	HiSolidChevronDoubleLeft,
	HiSolidChevronDoubleRight
} from "solid-icons/hi";
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
	const [expanded, setExpanded] = createSignal(false);
	const [width, setWidth] = createSignal(document.body.clientWidth);

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

	window.onresize = () => setWidth(document.body.clientWidth);

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

	const md = () => width() > 768;

	return (
		<Show
			when={entered()}
			fallback={
				<Enter name={name()} setName={setName} setEntered={setEntered} />
			}
		>
			<div class="h-full flex">
				<Show when={expanded() || md()}>
					<Sidebar
						spaces={spaces()}
						setSpaces={setSpaces}
						currentSpace={currentSpace()}
						setCurrentSpace={setCurrentSpace}
						serverOnlineCount={serverOnlineCount()}
						roomOnlineCount={roomOnlineCount()}
					/>
				</Show>
				<Chat
					name={name()}
					messages={messages()}
					currentSpace={currentSpace()}
				/>
				<Show when={!md()}>
					<button
						class={`absolute ${
							expanded() ? "left-80" : "left-0"
						} top-0 w-12 h-12 flex rounded-l-none rounded-t-none border-r-4 border-b-4 border-gray-800 bg-blue-900`}
						onClick={() => setExpanded(v => !v)}
					>
						<Show
							when={expanded()}
							fallback={<HiSolidChevronDoubleRight class="m-auto" />}
						>
							<HiSolidChevronDoubleLeft class="m-auto" />
						</Show>
					</button>
				</Show>
			</div>
		</Show>
	);
};

export default App;
