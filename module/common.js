var __webpack_modules__ = {
	'./src/module/common.js': function (module, exports) {
		exports.add = (a, b) => a + b
		module.exports.reduce = (a, b) => a - b
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

var __webpack_exports__ = {}

const { add, reduce } = __webpack_require__('./src/module/common.js')
add(1, 2)
reduce(2, 1)
