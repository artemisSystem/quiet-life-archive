// priority: 0

onEvent("recipes", event => {
	global.removals.forEach(i => event.remove({output: i}));
});

onEvent("tags.items", event => {
	global.removals.forEach(i => event.removeAllTagsFrom(i));
});

onEvent("tags.blocks", event => {
	global.removals.forEach(i => event.removeAllTagsFrom(i));
});
