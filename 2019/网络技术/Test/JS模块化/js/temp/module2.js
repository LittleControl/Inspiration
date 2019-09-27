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