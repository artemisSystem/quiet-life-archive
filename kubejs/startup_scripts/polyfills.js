// priority: 30

// Polyfills for various useful stuff that Rhino doesn't support

// https://github.com/behnammodi/polyfill/blob/1a5965edc0e2eaf8e6d87902cc719462e2a889fb/array.polyfill.js#L598
if (!Array.prototype.flat) {
	Object.defineProperty(Array.prototype, 'flat', {
		configurable: true,
		writable: true,
		value: function () {
			var depth =
				typeof arguments[0] === 'undefined' ? 1 : Number(arguments[0]) || 0;
			var result = [];
			var forEach = result.forEach;

			var flatDeep = function (arr, depth) {
				forEach.call(arr, function (val) {
					if (depth > 0 && Array.isArray(val)) {
						flatDeep(val, depth - 1);
					} else {
						result.push(val);
					}
				});
			};

			flatDeep(this, depth);
			return result;
		},
	});
}

// https://github.com/behnammodi/polyfill/blob/1a5965edc0e2eaf8e6d87902cc719462e2a889fb/array.polyfill.js#L631
if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, 'flatMap', {
    configurable: true,
    writable: true,
    value: function () {
      return Array.prototype.map.apply(this, arguments).flat(1);
    },
  });
}