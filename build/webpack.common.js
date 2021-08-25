const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: './src/index.js',
	// entry: ['./src/index.js'],
	// entry: {
	// 	main: {
	// 		import: './src/index',
	// 		filename: '[name].[contenthash:8].js'
	// 	}
	// },
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[contenthash:8].js',
		clean: true
	},
	optimization: {
		usedExports: true,
		minimize: true,
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				common: {
					name: 'common',
					chunks: 'all',
					minChunks: 1,
					minSize: 20,
					filename: 'js/[name].[contenthash:8].js'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
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
						loader: MiniCssExtractPlugin.loader
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
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css'
		})
	]
}
