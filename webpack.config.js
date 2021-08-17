const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devtool: false,
	devServer: {
		hot: true
	},
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
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
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
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset',
				generator: {
					filename: 'images/[name].[hash:8][ext]'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 23 * 1024
					}
				}
			},
			{
				test: /\.(eot|ttf|woff2?)$/i,
				generator: {
					filename: 'fonts/[name].[hash:8][ext]'
				}
			},
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
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ title: 'webpack', template: './public/index.html' }),
		new DefinePlugin({
			BASE_URL: '"./"'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public',
					globOptions: {
						ignore: ['**/index.html', '**/a.txt']
					}
				}
			]
		})
	]
}
