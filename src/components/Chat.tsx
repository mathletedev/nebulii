import { Component, createSignal, For } from "solid-js";

import { MessageData } from "../lib/types";
import Message from "./Message";

interface Props {
	name: string;
}

const Chat: Component<Props> = props => {
	const [messages, setMessages] = createSignal<MessageData[]>([]);
	const [message, setMessage] = createSignal("");
	let input!: HTMLInputElement;

	document.onkeydown = () => {
		if (document.activeElement?.tagName === "INPUT") return;
		input.focus();
	};

	return (
		<div class="w-full flex flex-col">
			<div class="w-full h-12 flex border-b-4 border-gray-800">
				<div class="m-auto text-2xl font-cursive">space</div>
			</div>
			<div class="w-full p-4 flex-grow overflow-y-scroll">
				<For each={messages()}>{m => <Message data={m} />}</For>
			</div>
			<form
				class="w-full p-4 flex gap-4"
				onSubmit={e => {
					e.preventDefault();
					if (message() === "") return;
					setMessages(v => [...v, { author: props.name, content: message() }]);
					setMessage("");
				}}
			>
				<div class="h-10 px-3 flex rounded-lg bg-sky-900">
					<div class="m-auto">{props.name}</div>
				</div>
				<input
					class="h-10 p-3 flex-grow"
					value={message()}
					onInput={e => setMessage(e.currentTarget.value)}
					placeholder="say something..."
					ref={input}
				/>
				<button class="w-10 h-10 bg-blue-900">✈️</button>
			</form>
		</div>
	);
};

export default Chat;
