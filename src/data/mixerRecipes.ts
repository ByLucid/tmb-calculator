import type { IngredientMap } from "./types";

export const mixerRecipes: Record<string, IngredientMap> = {
	"Treat": {
		Honey: 10_000n,
	},

	"Converter": {
		Honey: 500_000n,
		"Royal Jelly": 25n,
		Strawberry: 50n,
		Blueberry: 50n,
		Seed: 50n,
		"Pine Cone": 50n,
	},

	"Rare Starflower": {
		Honey: 500_000n,
		Starflower: 2n,
		"Royal Jelly": 10n,
	},

	"Epic Starflower": {
		Honey: 1_000_000n,
		"Rare Starflower": 3n,
		"Royal Jelly": 20n,
	},

	"Legendary Starflower": {
		Honey: 2_500_000n,
		"Epic Starflower": 4n,
		"Royal Jelly": 50n,
	},

	"Mythic Starflower": {
		Honey: 10_000_000n,
		"Legendary Starflower": 5n,
		"Royal Jelly": 250n,
	},

	"Exp Essence": {
		Honey: 10_000n,
		"Exp Orb": 5n,
	},

	"Night Bell": {
		Honey: 5_000_000n,
		"Lunar Treat": 250n,
		"Shiny Jelly": 3n,
	},

	"Lunar Ticket": {
		Ticket: 200n,
	},

	"Singularity Essence": {
		Honey: 250_000_000n,
		"Exp Essence": 250n,
		"Lunar Essence": 250n,
		"Wind Essence": 250n,
		"Water Essence": 250n,
		"Fire Essence": 250n,
		"Lunar Shard": 3n,
	},

	"Dice": {
		Honey: 5_000_000n,
		"Lunar Essence": 10n,
		"Exp Essence": 5n,
		"Royal Jelly": 5n,
	},

	"Double Dice": {
		Honey: 15_000_000n,
		"Lunar Essence": 20n,
		"Exp Essence": 15n,
		Dice: 3n,
	},

	"Triple Dice": {
		Honey: 50_000_000n,
		"Lunar Essence": 40n,
		"Exp Essence": 30n,
		"Double Dice": 3n,
	},

	"Glitter": {
		Honey: 10_000_000n,
		"Lunar Essence": 20n,
		"Exp Essence": 15n,
		Dice: 1n,
		"Shiny Jelly": 1n,
	},

	"Majestic Cocktail": {
		Honey: 25_000_000n,
		"Moon Extract": 2n,
		"Bamboo Flask": 3n,
		"Strawberry Extract": 7n,
		"Blueberry Extract": 7n,
		"Cone Extract": 7n,
		"Seed Oil": 7n,
		"Shiny Jelly": 2n,
	},

	"Moon Extract": {
		Honey: 1_000_000n,
		"Lunar Treat": 50n,
		"Royal Jelly": 50n,
	},

	"Bamboo Flask": {
		Honey: 250_000n,
		Bamboo: 50n,
		"Royal Jelly": 10n,
	},

	"Cone Extract": {
		Honey: 25_000n,
		"Pine Cone": 25n,
		"Wind Essence": 15n,
		"Royal Jelly": 5n,
	},

	"Strawberry Extract": {
		Honey: 25_000n,
		Strawberry: 25n,
		"Fire Essence": 15n,
		"Royal Jelly": 5n,
	},

	"Blueberry Extract": {
		Honey: 25_000n,
		Blueberry: 25n,
		"Water Essence": 15n,
		"Royal Jelly": 5n,
	},

	"Seed Oil": {
		Honey: 50_000n,
		Seed: 25n,
		"Royal Jelly": 5n,
	},

	"Shiny Jelly": {
		Honey: 5_000_000n,
		"Lunar Treat": 10n,
		"Royal Jelly": 150n,
	},

	"Bamboo Boba Tea": {
		Honey: 1_000_000n,
		Bamboo: 75n,
		Seed: 50n,
		"Pine Cone": 50n,
		"Lunar Treat": 50n,
		Glitter: 1n,
	},

	"Lunar Cocktail": {
		Honey: 25_000_000_000n,
		"Lunar Essence": 250n,
		"Moon Extract": 5n,
		"Shiny Jelly": 5n,
		"Lunar Shard": 1n,
	},

	"Pot'O'Vegetation": {
		Honey: 250_000_000_000_000n,
		"Foaming Carrot Juice": 2n,
		"Golden Carrot": 1n,
		"Golden Apple": 1n,
		"Gardener's Bundle": 5n,
		"Singularity Essence": 1n,
	},

	"Foaming Carrot Juice": {
		Honey: 12_000_000_000_000n,
		"Carrot Treat": 500n,
		"Magic Carrot": 12n,
		"Majestic Cocktail": 3n,
		"Bamboo Boba Tea": 5n,
		"Triple Dice": 3n,
	},

	"Rich Apple Juice": {
		Honey: 5_000_000_000_000n,
		"Apple Treat": 250n,
		"Strawberry Extract": 35n,
		Converter: 20n,
		"Moon Extract": 3n,
		Dice: 3n,
	},
};
