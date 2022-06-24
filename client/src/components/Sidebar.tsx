import { Component, createSignal, For, Setter } from "solid-js";

interface Props {
	spaces: string[];
	setSpaces: Setter<string[]>;
	currentSpace: string;
	setCurrentSpace: Setter<string>;
	serverOnlineCount: number;
	roomOnlineCount: number;
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
							class={`h-10 mx-4 mb-4 rounded-lg ${
								s === props.currentSpace ? "bg-indigo-900" : "bg-gray-800"
							}`}
						>
							<button
								class="absolute w-10 h-10 rounded-r-none"
								onClick={() => {
									props.setSpaces(v => v.filter(e => e !== s));
									if (s === props.currentSpace) props.setCurrentSpace("core");
								}}
							>
								❌
							</button>
							<button
								onClick={() => props.setCurrentSpace(s)}
								class="w-full h-full"
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
			<div class="mx-4 mt-4 rounded-t-lg text-center bg-gray-800">online</div>
			<div class="h-8 mx-4 mb-4 flex">
				<div class="w-1/2 rounded-bl-lg bg-blue-900">
					<div class="absolute w-8 h-8 flex">
						<div class="m-auto">🌎</div>
					</div>
					<div class="h-full flex">
						<div class="m-auto">{props.serverOnlineCount}</div>
					</div>
				</div>
				<div class="w-1/2 rounded-br-lg text-center bg-sky-900">
					<div class="absolute w-8 h-8 flex">
						<div class="m-auto">🏠</div>
					</div>
					<div class="h-full flex">
						<div class="m-auto">{props.roomOnlineCount}</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
