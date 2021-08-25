import { createHello } from './js/component.js'

document.body.appendChild(createHello())

if (process.env.NODE_ENV === 'production') {
	console.log(121221)
}
