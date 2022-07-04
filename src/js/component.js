import '../style/css/index.css'
import '../font/iconfont.css'
import notFound from '../images/404.jpg'
import jsonData from './data.json'
import excelData from './data.csv'

export function createHello() {
    const div = document.createElement('div')
    div.classList.add('hello-css')
    div.classList.add('hello-less')
    div.innerHTML = JSON.stringify(excelData)

    const img1 = new Image()
    img1.setAttribute('src', notFound)
    img1.setAttribute('width', '100px')
    const img2 = new Image()
    img2.setAttribute('src', require('../images/avatar.jpg'))
    div.appendChild(img1)
    div.appendChild(img2)

    const icon = document.createElement('i')
    icon.classList.add('iconfont')
    icon.classList.add('icon-kuihuazi')
    div.appendChild(icon)

    return div
}
