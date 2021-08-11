export function createHello() {
	const div = document.createElement('div')
	div.classList.add('hello')
	div.innerHTML = ['hello', 'webpack'].join(' ')
	return div
}
