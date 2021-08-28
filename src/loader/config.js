const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	devtool: 'hidden-source-map',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin({})],
	module: {
		rules: [
			{
				test: /\.css$/g,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.md$/g,
				use: [
					{
						loader: path.resolve(__dirname, './loader/md-loader.js')
					}
				]
			}
		]
	}
}
