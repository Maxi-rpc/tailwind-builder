import { useDroppable } from "@dnd-kit/core";
import type { ComponentNode } from "../types";
import { ComponentRenderer } from "./ComponentRenderer";

export const CanvasNode = ({
	node,
	onSelect,
	onDrop,
}: {
	node: ComponentNode;
	onSelect: (id: string) => void;
	onDrop: (parentId: string, type: string) => void;
}) => {
	const { setNodeRef } = useDroppable({ id: node.id });

	return (
		<div
			ref={setNodeRef}
			onClick={(e) => {
				e.stopPropagation();
				onSelect(node.id);
			}}
			className="mb-2 border border-dashed border-gray-400 p-2"
		>
			<ComponentRenderer node={node} />
			{node.children && (
				<div className="ml-4">
					{node.children.map((child) => (
						<CanvasNode
							key={child.id}
							node={child}
							onSelect={onSelect}
							onDrop={onDrop}
						/>
					))}
				</div>
			)}
		</div>
	);
};
