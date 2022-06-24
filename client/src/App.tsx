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
	const [onlineCount, setOnlineCount] = createSignal(0);

	client.onmessage = e => {
		if (Number.isNaN(Number(e.data)))
			setMessages(v => [
				...v,
				...e.data.split("\n").map((m: string) => JSON.parse(m))
			]);
		else setOnlineCount(parseInt(e.data));
	};

	createEffect(() => {
		currentSpace();
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
					onlineCount={onlineCount()}
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
