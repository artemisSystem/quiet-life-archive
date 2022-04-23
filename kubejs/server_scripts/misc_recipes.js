onEvent("recipes", event => {
	event.remove({ output: "minecraft:hopper" });
	event.shaped("minecraft:hopper", [
		"C C",
		"CIC",
		" C "
	], {
		C: "minecraft:copper_ingot",
		I: "minecraft:chest"
	});

	event.shaped("minecraft:bundle", [
		"SCS",
		"C C",
		"CCC"
	], {
		S: "minecraft:string",
		C: "farmersdelight:canvas"
	});

	event.remove({ output: "botania:rune_fire" });
	event.custom({
		type: "botania:runic_altar",
		output: Item.of("botania:rune_fire", 2).toResultJson(),
		mana: 2500,
		ingredients: [
			Ingredient.of("#botania:mana_dusts"),
			Ingredient.of("#botania:manasteel_ingots"),
			Ingredient.of("minecraft:nether_brick"),
			Ingredient.of("minecraft:gunpowder"),
			Ingredient.of("create:crimsite")
		]
	});
});
