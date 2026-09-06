export type IngredientMap = Record<string, bigint>;

export type EquipmentType =
	| "Tool"
	| "Bag"
	| "Gear"
	| "Hydrant"
	| "Planter";

export interface EquipmentItem {
	shop: string;
	type: EquipmentType;
	ingredients: IngredientMap;
}

export type ItemFilter = "all" | "equipment" | "mixer" | "raw";

export interface CraftRequest {
	item: string;
	quantity: bigint;
}

export interface CalculationResult {
	rawTotals: IngredientMap;
	craftTotals: IngredientMap;
}
