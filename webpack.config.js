const path = require('path')
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /\.less$/i,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			}
		]
	}
}
