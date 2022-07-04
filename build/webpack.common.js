const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const { DefinePlugin } = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv)/i,
                use: ['csv-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        hashDigestLength: 6,
        filename: '[name].[contenthash].js',
        clean: true
    }
}
