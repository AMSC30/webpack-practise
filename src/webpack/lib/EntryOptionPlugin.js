'use strict'

// 插件挂插件的操作，通过在entryOption这个hook中获取到上下文和入口
// 然后处理各个入口，为每一个入口挂载一个插件entryPlugin
class EntryOptionPlugin {
    apply(compiler) {
        compiler.hooks.entryOption.tap('EntryOptionPlugin', (context, entry) => {
            if (typeof entry === 'function') {
                const DynamicEntryPlugin = require('./DynamicEntryPlugin')
                new DynamicEntryPlugin(context, entry).apply(compiler)
            } else {
                const EntryPlugin = require('./EntryPlugin')
                for (const key in entry) {
                    const desc = entry[key]
                    const options = EntryOptionPlugin.entryDescriptionToOptions(compiler, key, desc)

                    for (const entry of desc.import) {
                        new EntryPlugin(context, entry, options).apply(compiler)
                    }
                }
            }
            return true
        })
    }

    static entryDescriptionToOptions(compiler, name, desc) {
        const options = {
            name,
            filename: desc.filename,
            runtime: desc.runtime,
            layer: desc.layer,
            dependOn: desc.dependOn,
            baseUri: desc.baseUri,
            publicPath: desc.publicPath,
            chunkLoading: desc.chunkLoading,
            asyncChunks: desc.asyncChunks,
            wasmLoading: desc.wasmLoading,
            library: desc.library
        }
        if (desc.layer !== undefined && !compiler.options.experiments.layers) {
            throw new Error(
                "'entryOptions.layer' is only allowed when 'experiments.layers' is enabled"
            )
        }
        if (desc.chunkLoading) {
            const EnableChunkLoadingPlugin = require('./javascript/EnableChunkLoadingPlugin')
            EnableChunkLoadingPlugin.checkEnabled(compiler, desc.chunkLoading)
        }
        if (desc.wasmLoading) {
            const EnableWasmLoadingPlugin = require('./wasm/EnableWasmLoadingPlugin')
            EnableWasmLoadingPlugin.checkEnabled(compiler, desc.wasmLoading)
        }
        if (desc.library) {
            const EnableLibraryPlugin = require('./library/EnableLibraryPlugin')
            EnableLibraryPlugin.checkEnabled(compiler, desc.library.type)
        }
        return options
    }
}

module.exports = EntryOptionPlugin
