import { equipmentData } from "./equipment";
import { mixerRecipes } from "./mixerRecipes";
import type { IngredientMap, ItemFilter } from "./types";

export const mixerNames = new Set(Object.keys(mixerRecipes));
export const equipmentNames = new Set(Object.keys(equipmentData));

export const equipmentRecipes: Record<string, IngredientMap> =
	Object.fromEntries(
		Object.entries(equipmentData).map(([name, data]) => [
			name,
			data.ingredients,
		]),
	);

export const recipes: Record<string, IngredientMap> = {
	...mixerRecipes,
	...equipmentRecipes,
};

export const rawNames = new Set<string>();

for (const ingredients of Object.values(recipes)) {
	for (const ingredientName of Object.keys(ingredients)) {
		if (!recipes[ingredientName]) {
			rawNames.add(ingredientName);
		}
	}
}

export const allItemNames = [
	...new Set([
		...Object.keys(recipes),
		...rawNames,
	]),
].sort((a, b) => a.localeCompare(b));

export const craftableCount = Object.keys(recipes).length;
export const mixerCount = mixerNames.size;
export const equipmentCount = equipmentNames.size;
export const rawMaterialCount = rawNames.size;

export function getItemFilterType(
	item: string,
): Exclude<ItemFilter, "all"> {
	if (equipmentNames.has(item)) return "equipment";
	if (mixerNames.has(item)) return "mixer";
	return "raw";
}

export function getItemCategoryLabel(item: string): string {
	if (equipmentNames.has(item)) {
		const info = equipmentData[item];
		return `${info.type} • ${info.shop}`;
	}

	if (mixerNames.has(item)) {
		return "Mixer recipe";
	}

	return "Raw material";
}

export function matchesItemFilter(
	item: string,
	filter: ItemFilter,
): boolean {
	return filter === "all" || getItemFilterType(item) === filter;
}
