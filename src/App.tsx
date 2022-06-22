import { Component, createSignal } from "solid-js";

const App: Component = () => {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<div>count: {count()}</div>
			<button onClick={() => setCount(c => c + 1)}>+</button>
		</>
	);
};

export default App;
