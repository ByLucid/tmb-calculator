import type { EquipmentItem } from "./types";

/**
 * Permanent shop / equipment targets currently in the calculator.
 *
 * Summer / Beach Shop is intentionally excluded.
 * Seed Pouch is included from the in-game cost you gave me.
 */
export const equipmentData: Record<string, EquipmentItem> = {
	// Starter Shop
	"Shovel": {
		shop: "Starter Shop",
		type: "Tool",
		ingredients: {},
	},

	"Rake": {
		shop: "Starter Shop",
		type: "Tool",
		ingredients: {
			Honey: 750n,
		},
	},

	"Hammer": {
		shop: "Starter Shop",
		type: "Tool",
		ingredients: {
			Honey: 3_400n,
		},
	},

	"Magnet": {
		shop: "Starter Shop",
		type: "Tool",
		ingredients: {
			Honey: 11_000n,
		},
	},

	"Scissors": {
		shop: "Starter Shop",
		type: "Tool",
		ingredients: {
			Honey: 27_500n,
		},
	},

	"Satchel": {
		shop: "Starter Shop",
		type: "Bag",
		ingredients: {},
	},

	"Jar": {
		shop: "Starter Shop",
		type: "Bag",
		ingredients: {
			Honey: 1_400n,
		},
	},

	"Flask": {
		shop: "Starter Shop",
		type: "Bag",
		ingredients: {
			Honey: 4_500n,
		},
	},

	"Backpack": {
		shop: "Starter Shop",
		type: "Bag",
		ingredients: {
			Honey: 18_000n,
		},
	},

	"Left Worker's Guard": {
		shop: "Starter Shop",
		type: "Gear",
		ingredients: {
			Honey: 18_000n,
		},
	},

	"Right Worker's Guard": {
		shop: "Starter Shop",
		type: "Gear",
		ingredients: {
			Honey: 18_000n,
		},
	},

	"Worker's Boots": {
		shop: "Starter Shop",
		type: "Gear",
		ingredients: {
			Honey: 18_000n,
		},
	},

	"Worker's Helmet": {
		shop: "Starter Shop",
		type: "Gear",
		ingredients: {
			Honey: 18_000n,
		},
	},

	"Worker's Belt": {
		shop: "Starter Shop",
		type: "Gear",
		ingredients: {
			Honey: 18_000n,
		},
	},

	"Worker's Gloves": {
		shop: "Starter Shop",
		type: "Gear",
		ingredients: {
			Honey: 18_000n,
		},
	},

	// Advanced Shop
	"Scythe": {
		shop: "Advanced Shop",
		type: "Tool",
		ingredients: {
			Honey: 35_000n,
		},
	},

	"Axe": {
		shop: "Advanced Shop",
		type: "Tool",
		ingredients: {
			Honey: 125_000n,
		},
	},

	"Pickaxe": {
		shop: "Advanced Shop",
		type: "Tool",
		ingredients: {
			Honey: 450_000n,
		},
	},

	"Gold Magnet": {
		shop: "Advanced Shop",
		type: "Tool",
		ingredients: {
			Honey: 900_000n,
		},
	},

	"Honey Dipper": {
		shop: "Advanced Shop",
		type: "Tool",
		ingredients: {
			Honey: 1_900_000n,
			"Pine Cone": 50n,
			Treat: 125n,
		},
	},

	"Flower Pot": {
		shop: "Advanced Shop",
		type: "Bag",
		ingredients: {
			Honey: 45_000n,
		},
	},

	"Bouquet Of Flowers": {
		shop: "Advanced Shop",
		type: "Bag",
		ingredients: {
			Honey: 150_000n,
		},
	},

	"Cauldron": {
		shop: "Advanced Shop",
		type: "Bag",
		ingredients: {
			Honey: 750_000n,
		},
	},

	"Hive": {
		shop: "Advanced Shop",
		type: "Bag",
		ingredients: {
			Honey: 1_600_000n,
			"Pine Cone": 50n,
			Treat: 100n,
		},
	},

	"Left Wasp Guard": {
		shop: "Advanced Shop",
		type: "Gear",
		ingredients: {
			Honey: 600_000n,
			"Pine Cone": 25n,
		},
	},

	"Right Wasp Guard": {
		shop: "Advanced Shop",
		type: "Gear",
		ingredients: {
			Honey: 600_000n,
			"Pine Cone": 25n,
		},
	},

	"Wasp Boots": {
		shop: "Advanced Shop",
		type: "Gear",
		ingredients: {
			Honey: 750_000n,
			"Pine Cone": 35n,
		},
	},

	"Wasp Helmet": {
		shop: "Advanced Shop",
		type: "Gear",
		ingredients: {
			Honey: 600_000n,
			"Pine Cone": 25n,
		},
	},

	"Wasp Belt": {
		shop: "Advanced Shop",
		type: "Gear",
		ingredients: {
			Honey: 500_000n,
			"Pine Cone": 25n,
		},
	},

	"Wasp Gloves": {
		shop: "Advanced Shop",
		type: "Gear",
		ingredients: {
			Honey: 600_000n,
			"Pine Cone": 25n,
		},
	},

	// Red Shop
	"Fire Scythe": {
		shop: "Red Shop",
		type: "Tool",
		ingredients: {
			Honey: 8_000_000n,
			Strawberry: 50n,
			"Fire Essence": 25n,
		},
	},

	"Furnace": {
		shop: "Red Shop",
		type: "Bag",
		ingredients: {
			Honey: 8_000_000n,
			Strawberry: 75n,
			"Fire Essence": 35n,
		},
	},

	"Coal Basket": {
		shop: "Red Shop",
		type: "Bag",
		ingredients: {
			Honey: 75_000_000n,
			Strawberry: 250n,
			"Royal Jelly": 150n,
			"Fire Essence": 125n,
		},
	},

	"Fire Boots": {
		shop: "Red Shop",
		type: "Gear",
		ingredients: {
			Honey: 25_000_000n,
			Strawberry: 100n,
			"Fire Essence": 50n,
		},
	},

	"Fire Guard": {
		shop: "Red Shop",
		type: "Gear",
		ingredients: {
			Honey: 15_000_000n,
			Strawberry: 90n,
			"Fire Essence": 45n,
		},
	},

	"Flame Guard": {
		shop: "Red Shop",
		type: "Gear",
		ingredients: {
			Honey: 30_000_000n,
			Strawberry: 125n,
			"Fire Essence": 50n,
			"Strawberry Extract": 5n,
		},
	},

	"Burning Guard": {
		shop: "Red Shop",
		type: "Gear",
		ingredients: {
			Honey: 75_000_000n,
			Strawberry: 250n,
			"Fire Essence": 100n,
			"Strawberry Extract": 15n,
		},
	},

	"Fire Ant Helmet": {
		shop: "Red Shop",
		type: "Gear",
		ingredients: {
			Honey: 300_000_000n,
			"Fire Essence": 200n,
			"Strawberry Extract": 25n,
			"Diamond Egg": 3n,
		},
	},

	"Fire Planter": {
		shop: "Red Shop",
		type: "Planter",
		ingredients: {
			Honey: 25_000_000n,
			"Fire Essence": 100n,
			Ticket: 50n,
		},
	},

	// Blue Shop
	"Snow Shovel": {
		shop: "Blue Shop",
		type: "Tool",
		ingredients: {
			Honey: 8_000_000n,
			Blueberry: 50n,
			"Water Essence": 25n,
		},
	},

	"Fridge": {
		shop: "Blue Shop",
		type: "Bag",
		ingredients: {
			Honey: 8_000_000n,
			Blueberry: 75n,
			"Water Essence": 35n,
		},
	},

	"Ice Basket": {
		shop: "Blue Shop",
		type: "Bag",
		ingredients: {
			Honey: 75_000_000n,
			Blueberry: 250n,
			"Royal Jelly": 150n,
			"Water Essence": 125n,
		},
	},

	"Ice Boots": {
		shop: "Blue Shop",
		type: "Gear",
		ingredients: {
			Honey: 25_000_000n,
			Blueberry: 100n,
			"Water Essence": 50n,
		},
	},

	"Snowflake Guard": {
		shop: "Blue Shop",
		type: "Gear",
		ingredients: {
			Honey: 15_000_000n,
			Blueberry: 90n,
			"Water Essence": 45n,
		},
	},

	"Snowy Guard": {
		shop: "Blue Shop",
		type: "Gear",
		ingredients: {
			Honey: 30_000_000n,
			Blueberry: 125n,
			"Water Essence": 50n,
			"Blueberry Extract": 5n,
		},
	},

	"Icicle Guard": {
		shop: "Blue Shop",
		type: "Gear",
		ingredients: {
			Honey: 75_000_000n,
			Blueberry: 250n,
			"Water Essence": 100n,
			"Blueberry Extract": 15n,
		},
	},

	"Ice Ant Helmet": {
		shop: "Blue Shop",
		type: "Gear",
		ingredients: {
			Honey: 300_000_000n,
			"Water Essence": 200n,
			"Blueberry Extract": 25n,
			"Diamond Egg": 3n,
		},
	},

	"Ice Planter": {
		shop: "Blue Shop",
		type: "Planter",
		ingredients: {
			Honey: 25_000_000n,
			"Water Essence": 100n,
			Ticket: 50n,
		},
	},

	// White Shop
	"Windy Staff": {
		shop: "White Shop",
		type: "Tool",
		ingredients: {
			Honey: 8_000_000n,
			"Pine Cone": 50n,
			"Wind Essence": 25n,
		},
	},

	"Windy Belt": {
		shop: "White Shop",
		type: "Gear",
		ingredients: {
			Honey: 750_000_000n,
			"Pine Cone": 250n,
			"Cone Extract": 25n,
			"Wind Essence": 500n,
		},
	},

	"Windy Helmet": {
		shop: "White Shop",
		type: "Gear",
		ingredients: {
			Honey: 300_000_000n,
			"Wind Essence": 200n,
			"Cone Extract": 25n,
			"Diamond Egg": 3n,
		},
	},

	// Hydrant Shop
	"Bronze Hydrant": {
		shop: "Hydrant Shop",
		type: "Hydrant",
		ingredients: {
			Honey: 10_000_000n,
		},
	},

	"Silver Hydrant": {
		shop: "Hydrant Shop",
		type: "Hydrant",
		ingredients: {
			Honey: 100_000_000n,
		},
	},

	"Golden Hydrant": {
		shop: "Hydrant Shop",
		type: "Hydrant",
		ingredients: {
			Honey: 1_000_000_000n,
		},
	},

	"Diamond Hydrant": {
		shop: "Hydrant Shop",
		type: "Hydrant",
		ingredients: {
			Honey: 10_000_000_000n,
		},
	},

	"Emerald Hydrant": {
		shop: "Hydrant Shop",
		type: "Hydrant",
		ingredients: {
			Honey: 100_000_000_000n,
		},
	},

	// Bamboo Shop
	"Bamboo Spear": {
		shop: "Bamboo Shop",
		type: "Tool",
		ingredients: {
			Honey: 20_000_000n,
			Bamboo: 25n,
			"Wind Essence": 25n,
		},
	},

	"Bamboo Rake": {
		shop: "Bamboo Shop",
		type: "Tool",
		ingredients: {
			Honey: 75_000_000n,
			Bamboo: 50n,
			"Bamboo Flask": 1n,
			"Wind Essence": 25n,
		},
	},

	"Bamboo Staff": {
		shop: "Bamboo Shop",
		type: "Tool",
		ingredients: {
			Honey: 200_000_000n,
			Bamboo: 125n,
			"Bamboo Flask": 3n,
			"Wind Essence": 50n,
		},
	},

	"Sheaf of Bamboo": {
		shop: "Bamboo Shop",
		type: "Bag",
		ingredients: {
			Honey: 200_000_000n,
			Bamboo: 150n,
			"Bamboo Flask": 3n,
			"Wind Essence": 75n,
		},
	},

	"Bamboo Gloves": {
		shop: "Bamboo Shop",
		type: "Gear",
		ingredients: {
			Honey: 100_000_000n,
			Bamboo: 100n,
			"Bamboo Flask": 2n,
			"Wind Essence": 50n,
		},
	},

	"Bamboo Belt": {
		shop: "Bamboo Shop",
		type: "Gear",
		ingredients: {
			Honey: 150_000_000n,
			Bamboo: 125n,
			"Bamboo Flask": 2n,
			"Wind Essence": 50n,
		},
	},

	"Aphid Helmet": {
		shop: "Bamboo Shop",
		type: "Gear",
		ingredients: {
			Honey: 250_000_000n,
			Bamboo: 125n,
			"Bamboo Flask": 2n,
			"Wind Essence": 50n,
		},
	},

	// Greenhouse
	"Nature Staff": {
		shop: "Greenhouse",
		type: "Tool",
		ingredients: {
			Honey: 100_000_000_000n,
			"Moon Extract": 20n,
			"Double Dice": 10n,
			"Gold Egg": 5n,
			"Lunar Essence": 250n,
			"Strawberry Extract": 50n,
			"Blueberry Extract": 50n,
			"Cone Extract": 50n,
		},
	},

	"Blossom Canister": {
		shop: "Greenhouse",
		type: "Bag",
		ingredients: {
			Honey: 250_000_000_000n,
			"Majestic Cocktail": 2n,
			Dice: 25n,
			"Diamond Egg": 5n,
			"Lunar Essence": 500n,
			"Wind Essence": 500n,
			"Fire Essence": 500n,
			"Water Essence": 500n,
			"Bamboo Flask": 50n,
			Bamboo: 1_000n,
		},
	},

	"Nature Belt": {
		shop: "Greenhouse",
		type: "Gear",
		ingredients: {
			Honey: 300_000_000_000n,
			"Bamboo Flask": 75n,
			"Triple Dice": 5n,
			"Diamond Egg": 5n,
			"Lunar Essence": 750n,
			"Wind Essence": 750n,
			"Fire Essence": 750n,
			"Water Essence": 750n,
		},
	},

	"Nature Gloves": {
		shop: "Greenhouse",
		type: "Gear",
		ingredients: {
			Honey: 25_000_000_000n,
			"Bamboo Flask": 20n,
			"Triple Dice": 3n,
			"Gold Egg": 3n,
			"Lunar Essence": 100n,
			"Wind Essence": 100n,
			"Fire Essence": 100n,
			"Water Essence": 100n,
		},
	},

	"Cardboard Planter": {
		shop: "Greenhouse",
		type: "Planter",
		ingredients: {
			Honey: 100_000_000n,
			"Wind Essence": 15n,
			"Fire Essence": 15n,
			"Water Essence": 15n,
		},
	},

	"Sticker Planter": {
		shop: "Greenhouse",
		type: "Planter",
		ingredients: {
			Ticket: 50n,
			"Wind Essence": 50n,
			"Fire Essence": 50n,
			"Water Essence": 50n,
		},
	},

	// Gardening
	"Seed Pouch": {
		shop: "Gardening",
		type: "Bag",
		ingredients: {
			Honey: 15_000_000_000_000_000n,
			"Pot'O'Vegetation": 1n,
			"Singularity Essence": 5n,
			"Rich Apple Juice": 5n,
			"Triple Dice": 50n,
			"Mythic Starflower": 3n,
			"Gardener's Bundle": 45n,
			"Magic Carrot": 1n,
		},
	},
};
