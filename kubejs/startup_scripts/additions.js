// priority: 0

onEvent("block.registry", event => {
	event.create("polished_stone", block => {
		block.material("stone");
		block.displayName("Polished Stone");
		block.tagBlock("minecraft:mineable/pickaxe");
		block.requiresTool(true);
		block.hardness(2.0);
		block.resistance(6.0);
	});
	event.create("polished_stone_slab", block => {
		block.type("slab");
		block.material("stone");
		block.displayName("Polished Stone Slab");
		block.tagBlock("minecraft:mineable/pickaxe");
		block.requiresTool(true);
		block.hardness(2.0);
		block.resistance(6.0);
	});
});
