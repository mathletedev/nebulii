import { Component, Setter } from "solid-js";

interface Props {
	name: string;
	setName: Setter<string>;
	setEntered: Setter<boolean>;
}

const Enter: Component<Props> = props => (
	<div class="h-full flex">
		<div class="m-auto">
			<div class="w-full text-center text-6xl">nebulii</div>
			<div class="h-8" />
			<form
				onSubmit={e => {
					e.preventDefault();
					if (props.name === "") return;
					props.setEntered(true);
				}}
			>
				<input
					class="h-12 p-4 rounded-lg text-center"
					value={props.name}
					onInput={e => props.setName(e.currentTarget.value)}
					placeholder="name"
				/>
				<div class="h-4" />
				<button class="w-full h-10 rounded-lg text-center bg-blue-900">
					enter
				</button>
			</form>
		</div>
	</div>
);

export default Enter;
