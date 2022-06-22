import { Component, createSignal, Show } from "solid-js";
import Chat from "./components/Chat";
import Enter from "./components/Enter";
import { MessageData } from "./lib/types";

const App: Component = () => {
	const [name, setName] = createSignal("");
	const [entered, setEntered] = createSignal(false);
	const [messages, setMessages] = createSignal<MessageData[]>([]);

	return (
		<Show
			when={entered()}
			fallback={
				<Enter name={name()} setName={setName} setEntered={setEntered} />
			}
		>
			<div class="h-full flex">
				<aside class="w-64 h-full">
					<div class="text-2xl text-center">nebulii</div>
				</aside>
				<Chat
					messages={messages()}
					sendMessage={m =>
						setMessages([...messages(), { author: name(), content: m }])
					}
				/>
			</div>
		</Show>
	);
};

export default App;
