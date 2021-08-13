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
			}
		]
	}
}
