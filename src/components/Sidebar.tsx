import { useDraggable } from "@dnd-kit/core";

const DraggableComponent = ({ id, label }: { id: string; label: string }) => {
	const { attributes, listeners, setNodeRef } = useDraggable({ id });

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className="cursor-move p-2 mb-2 bg-blue-100 rounded"
		>
			{label}
		</div>
	);
};

export const Sidebar = () => {
	return (
		<div className="w-1/4 bg-gray-100 p-4">
			<h2 className="text-lg font-semibold mb-4">Componentes</h2>
			<DraggableComponent id="button" label="Botón" />
			<DraggableComponent id="card" label="Card" />
		</div>
	);
};
