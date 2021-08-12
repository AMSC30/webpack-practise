import '../style/index.css'
import '../style/index.less'

export function createHello() {
	const div = document.createElement('div')
	div.classList.add('hello-css')
	div.classList.add('hello-less')
	div.innerHTML = ['hello', 'webpack'].join(' ')
	return div
}
