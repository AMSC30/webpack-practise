import { log } from './module'
log()
export function createHello() {
    const div = document.createElement('div')
    div.innerHTML = 'hello webpack'
    return div
}
