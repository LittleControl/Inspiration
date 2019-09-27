console.log('module3 is running')
let module2 = require('./module2')
let weibo = '@LittleControl'
module.exports = {
    web: weibo + ' ' + module2.getFull()
}

// define(function (require, exports, module) {
//     console.log('Module3 is running')
//     let age = 18
//     /* 注意这里要是异步加载模块2的时候,在回调函数里exports的值可能在main.js中拿不到  */
//     // require.async('./module2', function (module2) {
//     //     console.log('async module2 is finished')
//     //     console.log(module2)
//     //     exports.web = {
//     //         website: module2(),
//     //         age
//     //     }
//     // })

//     let module2 = require('./module2')
//     exports.web = {
//         website: module2(),
//         age
//     }

// })