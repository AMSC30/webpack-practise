/******/ ;(function () {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ './src/module/common.js':
			/*!******************************!*\
  !*** ./src/module/common.js ***!
  \******************************/
			/***/ function (module, exports) {
				exports.add = (a, b) => a + b
				module.exports.reduce = (a, b) => a - b

				/***/
			}

		/******/
	}
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {}
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId]
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {}
			/******/
		})
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports
		/******/
	}
	/******/
	/************************************************************************/
	var __webpack_exports__ = {}
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	!(function () {
		/*!**********************!*\
	  !*** ./src/index.js ***!
	  \**********************/
		const { add, reduce } = __webpack_require__(/*! ./module/common */ './src/module/common.js')
		add(1, 2)
		reduce(2, 1)
	})()
	/******/
})()
//# sourceMappingURL=index.js.map
