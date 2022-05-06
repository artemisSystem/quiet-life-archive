// priority: 10

// Removals
// Various items are added to this array in startup scripts
// Both client and server scripts reference it to hide from JEI and remove recipes.

// global.removals :: Array String
global.removals = [];
global.queueRemovals = xs =>
	void (global.removals = global.removals.concat(xs));
global.queueRemoval = x => global.queueRemovals([x]);

// type WoodType = { namespace :: String , id :: String, hasWoodSuffix :: Boolean }
const woodType = namespace => (id, hasWoodSuffix) => Object.assign(
	rl(namespace)(id),
	{ hasWoodSuffix: hasWoodSuffix == undefined ? true : hasWoodSuffix }
);

global.vanillaWoodTypes = map(woodType("minecraft"))([
	"oak", "birch", "spruce", "jungle",
	"acacia", "dark_oak", "crimson", "warped"
]);

global.moddedWoodTypes = [
	woodType("quark")("azalea"),
	woodType("quark")("blossom"),
	woodType("botania")("livingwood", false),
	woodType("botania")("dreamwood", false)
];

global.allWoodTypes = global.vanillaWoodTypes.concat(global.moddedWoodTypes);
