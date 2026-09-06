import { recipes } from "../data/catalog";
import type {
	CalculationResult,
	CraftRequest,
	IngredientMap,
} from "../data/types";

function addToTotals(
	totals: IngredientMap,
	item: string,
	amount: bigint,
): void {
	totals[item] = (totals[item] ?? 0n) + amount;
}

function expandRecipe(
	item: string,
	quantity: bigint,
	rawTotals: IngredientMap,
	craftTotals: IngredientMap,
	path: string[] = [],
): void {
	if (path.includes(item)) {
		throw new Error(
			`Circular recipe detected: ${[...path, item].join(" -> ")}`,
		);
	}

	const recipe = recipes[item];

	// No recipe means it is a base/raw item.
	if (!recipe) {
		addToTotals(rawTotals, item, quantity);
		return;
	}

	// Record every craftable item required, including equipment.
	addToTotals(craftTotals, item, quantity);

	const nextPath = [...path, item];

	for (const [ingredient, amount] of Object.entries(recipe)) {
		expandRecipe(
			ingredient,
			quantity * amount,
			rawTotals,
			craftTotals,
			nextPath,
		);
	}
}

export function calculateMaterials(
	requests: CraftRequest[],
): CalculationResult {
	const rawTotals: IngredientMap = {};
	const craftTotals: IngredientMap = {};

	for (const request of requests) {
		if (request.quantity <= 0n) continue;

		expandRecipe(
			request.item,
			request.quantity,
			rawTotals,
			craftTotals,
		);
	}

	return {
		rawTotals,
		craftTotals,
	};
}
