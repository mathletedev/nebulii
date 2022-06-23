import { Component, createSignal, For } from "solid-js";

const Sidebar: Component = () => {
	const [spaces, setSpaces] = createSignal<string[]>([]);
	const [space, setSpace] = createSignal("");

	return (
		<aside class="w-64 h-full flex flex-col border-r-4 border-gray-800">
			<div class="m-4 rounded-lg bg-indigo-900">
				<div class="p-2 text-4xl text-center font-cursive">nebulii</div>
			</div>
			<div class="w-full h-1 m-auto mb-4 bg-gray-800" />
			<div class="flex-grow overflow-y-scroll">
				<For each={spaces()}>
					{s => (
						<div class="mx-4 mb-4 rounded-lg bg-gray-800">
							<button class="w-full p-2">{s}</button>
						</div>
					)}
				</For>
			</div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (space() === "") return;
					setSpaces(v => [...v, space()]);
					setSpace("");
				}}
			>
				<input
					class="h-10 mx-4 mt-4 p-3 rounded-b-none text-center"
					value={space()}
					onInput={e => setSpace(e.currentTarget.value)}
					placeholder="space id"
				/>
				<div class="mx-4 rounded-b-lg bg-emerald-800">
					<button class="w-full">enter</button>
				</div>
			</form>
			<div class="m-4 rounded-lg bg-cyan-900">
				<div class="p-2 text-center">1 online</div>
			</div>
		</aside>
	);
};

export default Sidebar;
