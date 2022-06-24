import { Component, createSignal, For, Setter } from "solid-js";

interface Props {
	spaces: string[];
	setSpaces: Setter<string[]>;
	currentSpace: string;
	setCurrentSpace: Setter<string>;
	onlineCount: number;
}

const Sidebar: Component<Props> = props => {
	const [newSpace, setNewSpace] = createSignal("");

	return (
		<aside class="w-64 h-full flex flex-col border-r-4 border-gray-800">
			<div
				class={`m-4 rounded-lg ${
					props.currentSpace === "core" ? "bg-indigo-900" : "bg-gray-800"
				}`}
			>
				<button
					class="w-full p-2 text-4xl font-cursive"
					onClick={() => props.setCurrentSpace("core")}
				>
					nebulii
				</button>
			</div>
			<div class="w-full h-1 m-auto mb-4 bg-gray-800" />
			<div class="flex-grow overflow-y-scroll">
				<For each={props.spaces}>
					{s => (
						<div
							class={`mx-4 mb-4 rounded-lg ${
								s === props.currentSpace ? "bg-indigo-900" : "bg-gray-800"
							}`}
						>
							<button
								onClick={() => props.setCurrentSpace(s)}
								class="w-full p-2"
							>
								{s}
							</button>
						</div>
					)}
				</For>
			</div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (newSpace() === "") return;
					if (!props.spaces.includes(newSpace()) && newSpace() !== "core")
						props.setSpaces(v => [...v, newSpace()]);
					props.setCurrentSpace(newSpace());
					setNewSpace("");
				}}
			>
				<input
					class="h-10 mx-4 mt-4 p-3 rounded-b-none text-center"
					value={newSpace()}
					onInput={e => setNewSpace(e.currentTarget.value)}
					placeholder="space id"
					maxLength={8}
				/>
				<div class="mx-4 rounded-b-lg bg-emerald-800">
					<button class="w-full">enter</button>
				</div>
			</form>
			<div class="m-4 rounded-lg bg-cyan-900">
				<div class="p-2 text-center">{props.onlineCount} online</div>
			</div>
		</aside>
	);
};

export default Sidebar;
