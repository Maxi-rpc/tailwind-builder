import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Sidebar } from "./components/Sidebar";
import { Canvas } from "./components/Canvas";
import { EditPanel } from "./components/EditPanel";

export type ComponentData = {
	id: string;
	type: "button" | "card";
	props: {
		text?: string;
		bgColor?: string;
	};
};

function App() {
	const [components, setComponents] = useState<ComponentData[]>([]);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const handleDragEnd = (event: any) => {
		const { over, active } = event;
		if (over?.id === "canvas") {
			const newComponent: ComponentData = {
				id: "1",
				type: active.id,
				props: {
					text: active.id === "button" ? "Botón" : "Título",
					bgColor: active.id === "button" ? "bg-blue-500" : "bg-gray-100",
				},
			};
			setComponents((prev) => [...prev, newComponent]);
		}
	};

	const handleSelect = (id: string) => setSelectedId(id);

	const updateComponent = (id: string, newProps: ComponentData["props"]) => {
		setComponents((prev) =>
			prev.map((comp) =>
				comp.id === id
					? { ...comp, props: { ...comp.props, ...newProps } }
					: comp
			)
		);
	};

	const selected = components.find((c) => c.id === selectedId) || null;

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div className="flex h-screen">
				<Sidebar />
				<div className="flex-1 p-4 border-l relative">
					<Canvas components={components} onSelect={handleSelect} />
				</div>
				<EditPanel
					selected={selected}
					onChange={(props) => updateComponent(selected!.id, props)}
				/>
			</div>
		</DndContext>
	);
}

export default App;
