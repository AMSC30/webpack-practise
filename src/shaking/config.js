const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, './index.js'),
	mode: 'development',
	devtool: false,
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[contenthash:8].js'
	},
	optimization: {
		usedExports: true,
		minimize: true,
		splitChunks: {}
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'eslint-loader'
					}
				]
			}
		]
	},
	plugins: [new CleanWebpackPlugin()]
}
