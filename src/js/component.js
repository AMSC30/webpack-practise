import '../style/index.css'
import '../style/index.less'

export function createHello() {
	const div = document.createElement('div')
	div.classList.add('hello-css')
	div.classList.add('hello-less')
	div.innerHTML = ['hello', 'webpack'].join(' ')

	const img1 = new Image()
	img1.setAttribute('src', require('../images/4gyooe.jpg'))
	img1.setAttribute('width', '100px')
	const img2 = new Image()
	img2.setAttribute('src', require('../images/avatar.jpg'))
	div.appendChild(img1)
	div.appendChild(img2)

	const icon = document.createElement('i')
	icon.classList.add('iconfont')
	icon.classList.add('icon-mianxingchizi')
	div.appendChild(icon)

	return div
}
