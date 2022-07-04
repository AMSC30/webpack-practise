const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const resolve = p => path.resolve(__dirname, '../src', p)
module.exports = {
    devtool: 'none',
    entry: {
        index: resolve('index.js'),
        print: resolve('js/print.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '输出管理',
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
