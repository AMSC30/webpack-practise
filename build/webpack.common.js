const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = p => path.resolve(__dirname, '../src', p)

module.exports = {
    entry: {
        index: resolve('index.ts')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
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
