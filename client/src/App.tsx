import { Component, createSignal, Show } from "solid-js";

import Chat from "./components/Chat";
import Enter from "./components/Enter";
import Sidebar from "./components/Sidebar";

const App: Component = () => {
	const [name, setName] = createSignal("");
	const [entered, setEntered] = createSignal(false);
	const [spaces, setSpaces] = createSignal<string[]>([]);
	const [currentSpace, setCurrentSpace] = createSignal("core");

	return (
		<Show
			when={entered()}
			fallback={
				<Enter name={name()} setName={setName} setEntered={setEntered} />
			}
		>
			<div class="h-full flex">
				<Sidebar
					spaces={spaces()}
					setSpaces={setSpaces}
					setCurrentSpace={setCurrentSpace}
				/>
				<Chat name={name()} currentSpace={currentSpace()} />
			</div>
		</Show>
	);
};

export default App;
