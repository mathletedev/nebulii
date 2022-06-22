import { Accessor, Component, Setter } from "solid-js";

interface Props {
	name: string;
	setName: Setter<string>;
	setEntered: Setter<boolean>;
}

const Enter: Component<Props> = props => (
	<div class="h-full flex">
		<form
			class="m-auto"
			onSubmit={e => {
				e.preventDefault();
				props.setEntered(true);
			}}
		>
			<input
				class="h-12 p-4 rounded-lg text-center"
				value={props.name}
				onInput={e => props.setName(e.currentTarget.value)}
				placeholder="name"
			/>
		</form>
	</div>
);

export default Enter;
