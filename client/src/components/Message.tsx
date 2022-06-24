import { Component } from "solid-js";

import { MessageData } from "../lib/types";

interface Props {
	data: MessageData;
}

const Message: Component<Props> = props => (
	<div class="max-w-full mb-4 break-all">
		<span class="mr-2 px-2 py-1 rounded bg-gray-800">{props.data.author}</span>
		{props.data.content}
	</div>
);

export default Message;
