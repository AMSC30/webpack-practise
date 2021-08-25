/*! For license information please see main.79c24e77.js.LICENSE.txt */
!(function (e, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define([], t)
		: 'object' == typeof exports
		? (exports.math = t())
		: (e.math = t())
})(self, function () {
	return (function () {
		'use strict'
		var e = {
				'./src/library/lib/math.js': function (e, t, r) {
					r.d(t, {
						add: function () {
							return o
						}
					})
					var o = function (e, t) {
						return e + t
					}
				}
			},
			t = {}
		function r(o) {
			var n = t[o]
			if (void 0 !== n) return n.exports
			var i = (t[o] = { exports: {} })
			return e[o](i, i.exports, r), i.exports
		}
		;(r.d = function (e, t) {
			for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] })
		}),
			(r.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}),
			(r.r = function (e) {
				'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 })
			})
		var o = {}
		return (
			(function () {
				r.r(o)
				var e = r('./src/library/lib/math.js')
				;(o.default = { add: e.add }), (0, e.add)(1, 2)
			})(),
			o
		)
	})()
})
