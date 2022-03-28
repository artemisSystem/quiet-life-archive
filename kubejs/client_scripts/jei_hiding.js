// priority: 0

onEvent("jei.remove.categories", event => {
	const removals = [
		"create:automatic_brewing",
		"create:automatic_packing",
		"create:automatic_shaped",
		"create:automatic_shapeless",
		"create:block_cutting"
	];
	removals.forEach(c => event.remove(c));
});

onEvent("jei.hide.items", event => {
	global.removals.forEach(i => event.hide(i));
});
