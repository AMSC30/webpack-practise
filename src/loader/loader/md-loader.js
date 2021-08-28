const marked = require('marked')
const hljs = require('highlight.js')

module.exports = function (content) {
	marked.setOptions({
		highlight(code) {
			return hljs.highlight(code, { language: 'js' }).value
		}
	})
	let htmlResult = marked(content)
	htmlResult = '`' + htmlResult + '`'
	return `var result = ${htmlResult};export default result`
}
