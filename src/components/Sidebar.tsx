import { Component } from "solid-js";

const Sidebar: Component = () => (
	<aside class="w-64 h-full flex flex-col border-r-4 border-gray-800">
		<div class="m-4 rounded-lg bg-indigo-900">
			<div class="p-2 text-4xl text-center font-cursive">nebulii</div>
		</div>
		<div class="flex-grow" />
		<div class="m-4 rounded-lg bg-cyan-900">
			<div class="p-2 text-center">1 online</div>
		</div>
	</aside>
);

export default Sidebar;
