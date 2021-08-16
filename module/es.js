var __webpack_modules__ = {
	'./src/module/es.js': function (module, exports, __webpack_require__) {
		__webpack_require__.r(exports)
		__webpack_require__.d(exports, {
			add: function () {
				return add
			}
		})
		const add = (a, b) => a + b
		exports['default'] = (a, b) => a - b
	}
}
var __webpack_module_cache__ = {}

function __webpack_require__(moduleId) {
	var cachedModule = __webpack_module_cache__[moduleId]
	if (cachedModule !== undefined) {
		return cachedModule.exports
	}
	var module = (__webpack_module_cache__[moduleId] = {
		exports: {}
	})

	__webpack_modules__[moduleId](module, module.exports, __webpack_require__)

	return module.exports
}

__webpack_require__.d = function (exports, definition) {
	for (var key in definition) {
		if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
		}
	}
}

__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop)
}

__webpack_require__.r = function (exports) {
	if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
	}
	Object.defineProperty(exports, '__esModule', { value: true })
}

var exports = {}

__webpack_require__.r(exports)
var _module_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/module/es.js')

_module_es_js__WEBPACK_IMPORTED_MODULE_0__.add(1, 2)
_module_es_js__WEBPACK_IMPORTED_MODULE_0__.default(2, 1)
