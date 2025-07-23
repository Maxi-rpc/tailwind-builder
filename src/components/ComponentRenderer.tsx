export const ComponentRenderer = ({
	type,
	props,
}: {
	type: string;
	props: { text?: string; bgColor?: string };
}) => {
	switch (type) {
		case "button":
			return (
				<button
					className={`px-4 py-2 text-white rounded ${
						props.bgColor || "bg-blue-500"
					}`}
				>
					{props.text || "Botón"}
				</button>
			);
		case "card":
			return (
				<div className={`p-4 rounded shadow ${props.bgColor || "bg-gray-100"}`}>
					<h3 className="text-lg font-semibold mb-2">
						{props.text || "Título"}
					</h3>
					<p>Contenido de la tarjeta</p>
				</div>
			);
		default:
			return null;
	}
};
