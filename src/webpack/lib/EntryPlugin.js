/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

'use strict'

const EntryDependency = require('./dependencies/EntryDependency')

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Entrypoint").EntryOptions} EntryOptions */

class EntryPlugin {
    constructor(context, entry, options) {
        this.context = context
        this.entry = entry
        this.options = options || ''
    }

    apply(compiler) {
        // 将入口对象和模块对象的创建方法挂载到compilation上
        compiler.hooks.compilation.tap('EntryPlugin', (compilation, { normalModuleFactory }) => {
            compilation.dependencyFactories.set(EntryDependency, normalModuleFactory)
        })

        const { entry, options, context } = this
        const dep = EntryPlugin.createDependency(entry, options)
        compiler.hooks.make.tapAsync('EntryPlugin', (compilation, callback) => {
            compilation.addEntry(context, dep, options, err => {
                callback(err)
            })
        })
    }

    static createDependency(entry, options) {
        const dep = new EntryDependency(entry)
        // TODO webpack 6 remove string option
        dep.loc = { name: typeof options === 'object' ? options.name : options }
        return dep
    }
}

module.exports = EntryPlugin
