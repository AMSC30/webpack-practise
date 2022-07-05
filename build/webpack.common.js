const path = require('path')

const resolve = p => path.resolve(__dirname, '../src', p)

module.exports = {
    entry: {
        index: resolve('index.js')
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        clean: true,
        library: {
            name: 'webpack-number',
            type: 'umd'
        }
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}
