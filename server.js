const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const Express = require('express')
const config = require('./webpack.config')

const app = new Express()

const compiler = webpack(config)

const middleware = WebpackDevMiddleware(compiler)

app.use(middleware)

app.listen(3000, () => {
	console.log('server is listening on port 3000')
})
