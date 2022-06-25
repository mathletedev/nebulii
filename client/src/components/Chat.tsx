import { HiSolidPaperAirplane } from "solid-icons/hi";
import { Component, createSignal, For } from "solid-js";

import client from "../lib/client";
import { MessageData } from "../lib/types";
import Message from "./Message";

interface Props {
	name: string;
	messages: MessageData[];
	currentSpace: string;
}

const Chat: Component<Props> = props => {
	const [currentMessage, setCurrentMessage] = createSignal("");
	let input!: HTMLInputElement;

	document.onkeydown = () => {
		if (document.activeElement?.tagName === "INPUT") return;
		input.focus();
	};

	return (
		<div class="w-full flex flex-col">
			<div class="w-full h-12 flex border-b-4 border-gray-800">
				<div class="m-auto text-2xl font-cursive">{props.currentSpace}</div>
			</div>
			<div class="w-full p-4 flex-grow overflow-y-scroll">
				<For each={props.messages}>{m => <Message data={m} />}</For>
			</div>
			<form
				class="w-full p-4 flex gap-4"
				onSubmit={e => {
					e.preventDefault();
					if (currentMessage() === "") return;
					client.send(
						JSON.stringify({
							action: "send-message",
							author: props.name,
							content: currentMessage()
						} as MessageData)
					);
					setCurrentMessage("");
				}}
			>
				<div class="h-10 px-3 flex rounded-lg bg-sky-900">
					<div class="m-auto">{props.name}</div>
				</div>
				<input
					class="h-10 p-3 flex-grow"
					value={currentMessage()}
					onInput={e => setCurrentMessage(e.currentTarget.value)}
					placeholder="say something..."
					ref={input}
				/>
				<button class="w-10 h-10 flex bg-blue-900">
					<HiSolidPaperAirplane class="m-auto" />
				</button>
			</form>
		</div>
	);
};

export default Chat;
