const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = p => path.resolve(__dirname, '../src', p)

module.exports = {
    entry: {
        index: resolve('index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '输出管理&HMR',
            template: resolve('index.html')
        })
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        hashDigestLength: 6,
        filename: '[name].[contenthash].js',
        clean: true
    }
}
