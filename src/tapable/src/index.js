const { AsyncParallelHook, AsyncParallelBailHook } = require('tapable')

// 并行的异步 Hook
const hooks = new AsyncParallelBailHook(['params'])

hooks.tapAsync('a', (start, cb) => {
    setTimeout(() => {
        console.log('hooks a')
        cb(1)
    }, 1000)
})

hooks.tapAsync('b', (start, cb) => {
    setTimeout(() => {
        console.log('hooks b')
        cb()
    }, 500)
})

hooks.callAsync('start', (...args) => {
    console.log(args)
})
