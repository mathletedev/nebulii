import { Component } from "solid-js";

import { MessageData } from "../lib/types";

interface Props {
	data: MessageData;
}

const Message: Component<Props> = props => (
	<div class="max-w-full break-all">
		{props.data.author}: {props.data.content}
	</div>
);

export default Message;
