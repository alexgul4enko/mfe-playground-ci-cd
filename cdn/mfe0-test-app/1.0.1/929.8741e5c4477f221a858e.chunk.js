(self["webpackChunkmfe0_test_app"] = self["webpackChunkmfe0_test_app"] || []).push([[929],{

/***/ 40:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __resourceQuery = "?http%3A%2F%2Flocalhost%3A49479%2Flazy-compilation-using-";
/* global __resourceQuery */



if (typeof EventSource !== "function") {
	throw new Error(
		"Environment doesn't support lazy compilation (requires EventSource)"
	);
}

var urlBase = decodeURIComponent(__resourceQuery.slice(1));
/** @type {EventSource | undefined} */
var activeEventSource;
var activeKeys = new Map();
var errorHandlers = new Set();

var updateEventSource = function updateEventSource() {
	if (activeEventSource) activeEventSource.close();
	if (activeKeys.size) {
		activeEventSource = new EventSource(
			urlBase + Array.from(activeKeys.keys()).join("@")
		);
		/**
		 * @this {EventSource}
		 * @param {Event & { message?: string, filename?: string, lineno?: number, colno?: number, error?: Error }} event event
		 */
		activeEventSource.onerror = function (event) {
			errorHandlers.forEach(function (onError) {
				onError(
					new Error(
						"Problem communicating active modules to the server: " +
							event.message +
							" " +
							event.filename +
							":" +
							event.lineno +
							":" +
							event.colno +
							" " +
							event.error
					)
				);
			});
		};
	} else {
		activeEventSource = undefined;
	}
};

/**
 * @param {{ data: string, onError: (err: Error) => void, active: boolean, module: module }} options options
 * @returns {() => void} function to destroy response
 */
exports.keepAlive = function (options) {
	var data = options.data;
	var onError = options.onError;
	var active = options.active;
	var module = options.module;
	errorHandlers.add(onError);
	var value = activeKeys.get(data) || 0;
	activeKeys.set(data, value + 1);
	if (value === 0) {
		updateEventSource();
	}
	if (!active && !module.hot) {
		console.log(
			"Hot Module Replacement is not enabled. Waiting for process restart..."
		);
	}

	return function () {
		errorHandlers.delete(onError);
		setTimeout(function () {
			var value = activeKeys.get(data);
			if (value === 1) {
				activeKeys.delete(data);
				updateEventSource();
			} else {
				activeKeys.set(data, value - 1);
			}
		}, 1000);
	};
};


/***/ }),

/***/ 929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var client = __webpack_require__(40)
var data = "/Users/oleksandrgulchenko/Desktop/POC/app/node_modules/babel-loader/lib/index.js%3F%3FruleSet%5B1%5D.rules%5B1%5D.use%5B0%5D!/Users/oleksandrgulchenko/Desktop/POC/app/src/bootstrap.tsx";
var resolveSelf, onError;
module.exports = new Promise(function(resolve, reject) { resolveSelf = resolve; onError = reject; });
if (module.hot) {
	module.hot.accept();
	if (module.hot.data && module.hot.data.resolveSelf) module.hot.data.resolveSelf(module.exports);
	module.hot.dispose(function(data) { data.resolveSelf = resolveSelf; dispose(data); });
}
var dispose = client.keepAlive({ data: data, active: false, module: module, onError: onError });

/***/ })

}]);
//# sourceMappingURL=929.8741e5c4477f221a858e.chunk.js.map