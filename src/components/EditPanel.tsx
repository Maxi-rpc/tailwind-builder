export type ComponentData = {
	id: string;
	type: "button" | "card";
	props: {
		text?: string;
		bgColor?: string;
	};
};

type Props = {
	selected: ComponentData | null;
	onChange: (props: ComponentData["props"]) => void;
};

export const EditPanel = ({ selected, onChange }: Props) => {
	if (!selected)
		return (
			<div className="w-1/4 bg-gray-100 p-4">Seleccioná un componente</div>
		);

	return (
		<div className="w-1/4 bg-gray-100 p-4">
			<h2 className="font-bold mb-4">Editar componente</h2>

			<label className="block text-sm mb-1">Texto</label>
			<input
				type="text"
				value={selected.props.text || ""}
				onChange={(e) => onChange({ text: e.target.value })}
				className="w-full p-1 border mb-4"
			/>

			<label className="block text-sm mb-1">Color de fondo (Tailwind)</label>
			<input
				type="text"
				value={selected.props.bgColor || ""}
				onChange={(e) => onChange({ bgColor: e.target.value })}
				className="w-full p-1 border"
			/>
		</div>
	);
};
