// priority: 10

// Various items are added to this array in startup scripts
// Both client and server scripts reference it to hide from JEI and remove recipes.
// TODO: make this contain objects that have extra info, like what block you should be able to craft it into
global.removals = [];
global.queueRemovals = xs =>
	void (global.removals = global.removals.concat(xs));
global.queueRemoval = x => global.queueRemovals([x]);

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
