import React, { useState } from "react";

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
	onClose: () => void;
};

export const ExportPanel = ({ components, onClose }: Props) => {
	const [format, setFormat] = useState<"html" | "jsx">("html");

	const generateCode = () => {
		return components
			.map((comp) => {
				const { type, props } = comp;
				const text = props.text || "";
				const bg = props.bgColor || "";

				if (type === "button") {
					if (format === "html") {
						return `<button class="${bg} px-4 py-2 text-white rounded">${text}</button>`;
					} else {
						return `<button className="${bg} px-4 py-2 text-white rounded">${text}</button>`;
					}
				}

				if (type === "card") {
					if (format === "html") {
						return `
<div class="${bg} p-4 rounded shadow">
  <h3 class="text-lg font-semibold mb-2">${text}</h3>
  <p>Contenido de la tarjeta</p>
</div>`;
					} else {
						return `
<div className="${bg} p-4 rounded shadow">
  <h3 className="text-lg font-semibold mb-2">${text}</h3>
  <p>Contenido de la tarjeta</p>
</div>`;
					}
				}

				return "";
			})
			.join("\n\n");
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20">
			<div className="bg-white w-[80%] max-w-4xl p-6 rounded shadow relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
				>
					✕
				</button>
				<h2 className="text-xl font-bold mb-4">
					Código exportado ({format.toUpperCase()})
				</h2>

				<div className="mb-4">
					<label className="mr-4">
						<input
							type="radio"
							value="html"
							checked={format === "html"}
							onChange={() => setFormat("html")}
						/>
						<span className="ml-1">HTML</span>
					</label>
					<label className="ml-4">
						<input
							type="radio"
							value="jsx"
							checked={format === "jsx"}
							onChange={() => setFormat("jsx")}
						/>
						<span className="ml-1">JSX</span>
					</label>
				</div>

				<textarea
					readOnly
					className="w-full h-80 p-2 border font-mono text-sm"
					value={generateCode()}
				/>
			</div>
		</div>
	);
};
