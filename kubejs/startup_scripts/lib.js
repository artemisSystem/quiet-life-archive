// priority: 20

// Defining functions with `const f` makes them available to all startup scripts
// as `f`, while defining them as `global.f` makes them available to
// server/client (and startup) scripts as `global.f`. We do both, using chained
// assignment (i have no idea if it's called that).

// General FP Utilities

const map = global.map = f => xs => xs.map(f);
const lift2 = global.lift2 = f => xs => ys => ys.flatMap(y => xs.map(x => f(x)(y)));
const mapObj = global.mapObj = f => obj =>
	Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, f(v, k)]));
const reduceObj = global.reduceObj = f => acc0 => obj =>
	Object.entries(obj).reduce((acc, [k, v]) => f(acc, v, k), acc0);
const setKey = global.setKey = k => v => obj => {
	let newObj = Object.assign({}, obj);
	newObj[k] = v;
	return newObj;
};
const editKey = global.editKey = k => f => obj => {
	let newObj = Object.assign({}, obj);
	newObj[k] = f(obj[k]);
	return newObj;
};
const numbers = global.numbers = n => Array.from(Array(n + 1).keys()).slice(1);
// Return all elements in `as` that are not in `bs`
const difference = global.difference = as => bs => as.filter(a => !bs.includes(a));

// Minecraft Utilities

// type ResourceLocation = { name :: String, id :: String }
const rl = global.rl = namespace => id => ({ namespace: namespace, id: id });
const rlStr = global.rlStr = rl => `${rl.namespace}:${rl.id}`;
// TODO: functions to construct removals from different types of values (string, rl)
const dyeColors = global.dyeColors = [
	"white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
	"light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
];
const colorVariants = global.colorVariants = variants =>
	global.dyeColors.flatMap(color => variants.map(variant => `${color}_${variant}`));

// type Properties =
	// { requiresTool :: Boolean
	// , tags :: Array String
	// , material :: String
	// , hardness :: Number
	// , resistance :: Number
	// }
const woodProperties =
	{ requiresTool: false
	, tags: "minecraft:mineable/axe"
	, material: "wood"
	, hardness: 2.0
	, resistance: 2.0
	}
const stoneProperties =
	{ requiresTool: true
	, tags: "minecraft:mineable/pickaxe"
	, material: "rock"
	, hardness: 1.5
	, resistance: 6.0
	}
const smoothStoneProperties =
	Object.assign({}, stoneProperties, {hardness: 2.0});
const deepslateProperties =
	Object.assign({}, stoneProperties, {hardness: 3.0});

// const blockFromProperties