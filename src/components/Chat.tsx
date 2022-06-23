import { Component, createSignal, For } from "solid-js";
import { MessageData } from "../lib/types";
import Message from "./Message";

interface Props {
	name: string;
	messages: MessageData[];
	sendMessage: (m: string) => void;
}

const Chat: Component<Props> = props => {
	const [message, setMessage] = createSignal("");

	return (
		<div class="w-full flex flex-col">
			<div class="w-full p-4 flex-grow overflow-y-scroll">
				<For each={props.messages}>{m => <Message data={m} />}</For>
			</div>
			<form
				class="w-full px-4 pb-4 flex gap-4"
				onSubmit={e => {
					e.preventDefault();
					if (message() === "") return;
					props.sendMessage(message());
					setMessage("");
				}}
			>
				<div class="h-10 px-3 flex rounded-lg bg-indigo-900">
					<div class="m-auto">{props.name}</div>
				</div>
				<input
					class="h-10 p-3 flex-grow rounded-lg"
					value={message()}
					onInput={e => setMessage(e.currentTarget.value)}
					placeholder="say something..."
				/>
				<button class="w-10 h-10 rounded-lg bg-blue-900">✈️</button>
			</form>
		</div>
	);
};

export default Chat;
