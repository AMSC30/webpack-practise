import { createHello } from './js/component.js'
import { log } from './js/module'
document.body.appendChild(createHello())
log()
if (process.env.NODE_ENV === 'production') {
    console.log(121221)
}
