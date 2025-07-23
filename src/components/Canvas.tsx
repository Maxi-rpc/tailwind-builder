import { useDroppable } from "@dnd-kit/core";
import { ComponentRenderer } from "./ComponentRenderer";

export type ComponentData = {
	id: string;
	type: "button" | "card";
	props: {
		text?: string;
		bgColor?: string;
	};
};

type Props = {
	components: ComponentData[];
	onSelect: (id: string) => void;
};

export const Canvas = ({ components, onSelect }: Props) => {
	const { setNodeRef } = useDroppable({ id: "canvas" });

	return (
		<div
			ref={setNodeRef}
			className="min-h-[600px] bg-white border-2 border-dashed border-gray-400 p-4"
		>
			{components.map((comp) => (
				<div
					key={comp.id}
					className="mb-4 cursor-pointer"
					onClick={() => onSelect(comp.id)}
				>
					<ComponentRenderer type={comp.type} props={comp.props} />
				</div>
			))}
		</div>
	);
};
