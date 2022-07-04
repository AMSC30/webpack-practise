const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = p => path.resolve(__dirname, '../src', p)

module.exports = {
    entry: {
        index: resolve('index.js')
    },
    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            title: '输出管理',
            template: resolve('index.html')
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        hashDigestLength: 6,
        filename: '[name].[contenthash].js',
        clean: true
    }
}
