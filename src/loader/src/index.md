# 学习 webpack

## 资源打包

    1.样式打包
    2.图片打包
    3.字体文件打包

## 开发效率

    1.webpack-dev-server
    2.HMR

## 代码分包

    1.代码分割
    2.代码分包
    3.代码合并

## tree-shaking

    1.usedExports+terser
    2.asideEffects

```js
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

	const p = new Promise((resolve, reject) => {
		if (resolve) {
			resolve()
		} else {
			reject()
		}
	})
	p.finally(() => {})
	return div
}
```
