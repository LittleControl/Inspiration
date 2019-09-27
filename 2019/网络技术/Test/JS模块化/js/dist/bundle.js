(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* commonJS */

let module3 = require('./modules/module3')
console.log(module3.web)


/* AMD */
// (function () {
//     require.config({
//         baseUrl: 'js/modules/',
//         path: {
//             module1: './module1',
//             module2: './module2',
//             module3: './module3',
//         }

//     })
//     require(['module1', `module3`], function (m1, m3) {
//         console.log(m1.getName())
//         console.log(m3.getWeb())
//     })
// })()

/* CMD */
// define(function (require) {
//     // let module3 = require('./modules/module3')
//     // console.log(module3.web)
//     require.async('./modules/module3', function (m3) {
//         console.log(m3)
//         console.log(typeof m3)
//         console.log(m3.web)
//     })
// })

},{"./modules/module3":4}],2:[function(require,module,exports){
console.log('module1 is running');
let name = 'LittleControl'
exports.name = name

/* define(function (require, exports, module) {
    let name = 'LittleControl'
    console.log('Module1 is running')
    function getName() {
        return name
    }
    exports.getName = getName
}) */

},{}],3:[function(require,module,exports){
console.log('module2 is running')
let module1 = require('./module1')
let website = 'www.littlecontrol.top'
module.exports = {
    website: website,
    getFull() {
        return module1.name + ' ' + website
    }
}


/* define(function (require, exports, module) {
    let website = 'www.littlecontrol.top'
    console.log('Module2 is running')
    let module1 = require('./module1')
    function getFull() {
        return module1.getName() + ' : ' + website
    }
    module.exports = getFull
})
 */
},{"./module1":2}],4:[function(require,module,exports){
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
},{"./module2":3}]},{},[1]);
