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
			},

		/***/ './src/module/es.js':
			/*!**************************!*\
      !*** ./src/module/es.js ***!
      \**************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict'
				__webpack_require__.r(__webpack_exports__)
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ add: function () {
						return /* binding */ add
					}
					/* harmony export */
				})
				const add = (a, b) => a + b
				/* harmony default export */ __webpack_exports__['default'] = (a, b) => a - b

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
	/******/ /* webpack/runtime/define property getters */
	/******/ !(function () {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = function (exports, definition) {
			/******/ for (var key in definition) {
				/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
					/******/
				}
				/******/
			}
			/******/
		}
		/******/
	})()
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ !(function () {
		/******/ __webpack_require__.o = function (obj, prop) {
			return Object.prototype.hasOwnProperty.call(obj, prop)
		}
		/******/
	})()
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ !(function () {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = function (exports) {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true })
			/******/
		}
		/******/
	})()
	/******/
	/************************************************************************/
	var __webpack_exports__ = {}
	// This entry need to be wrapped in an IIFE because it need to be in strict mode.
	!(function () {
		'use strict'
		/*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
		__webpack_require__.r(__webpack_exports__)
		/* harmony import */ var _module_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/common */ './src/module/common.js')

		const math = __webpack_require__(/*! ./module/es.js */ './src/module/es.js')
		console.log(_module_common__WEBPACK_IMPORTED_MODULE_0__)
		console.log(math)
	})()
	/******/
})()
//# sourceMappingURL=index.js.map
