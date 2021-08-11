import '../style/index.css'
import '../style/index.less'

export function createHello() {
	const div = document.createElement('div')
	div.classList.add('hello')
	div.innerHTML = ['hello', 'webpack'].join(' ')
	return div
}
