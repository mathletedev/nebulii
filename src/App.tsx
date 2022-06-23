import { Component, createSignal, Show } from "solid-js";

import Chat from "./components/Chat";
import Enter from "./components/Enter";
import Sidebar from "./components/Sidebar";

const App: Component = () => {
	const [name, setName] = createSignal("");
	const [entered, setEntered] = createSignal(false);

	return (
		<Show
			when={entered()}
			fallback={
				<Enter name={name()} setName={setName} setEntered={setEntered} />
			}
		>
			<div class="h-full flex">
				<Sidebar />
				<Chat name={name()} />
			</div>
		</Show>
	);
};

export default App;
