(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.fun1)(); /* 主模块 */

(0, _module.fun2)();
(0, _module2.fun3)();
(0, _module2.fun4)();
_module4.default.fun5();
_module4.default.fun6();
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fun1 = fun1;
exports.fun2 = fun2;
/* 单独暴露 */

function fun1() {
    console.log('fun1()... module1');
}
function fun2() {
    console.log('fun2()... module1');
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 统一暴露 */

var fun3 = function fun3() {
    console.log('fun3()... module2');
};
var fun4 = function fun4() {
    console.log('fun4()... module2');
};

/* function fun3() {
    console.log('fun3()... module2')
}

function fun4() {
    console.log('fun4()... module2')
} */

exports.fun3 = fun3;
exports.fun4 = fun4;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 默认暴露 */

var fun5 = function fun5() {
    console.log('fun5()... module3');
};
var fun6 = function fun6() {
    console.log('fun6()... module3');
};

exports.default = { fun6: fun6, fun5: fun5 };
},{}]},{},[1]);
