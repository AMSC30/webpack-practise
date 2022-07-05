import print from './print'
import './index.css'
function createHello() {
    const div = document.createElement('div')
    div.innerHTML = 'hello webpack'
    document.body.append(div)
}
print()
createHello()
