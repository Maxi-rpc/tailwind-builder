export type ComponentNode = {
	id: string;
	type: "row" | "col" | "button" | "card";
	props?: any;
	children?: ComponentNode[];
};
