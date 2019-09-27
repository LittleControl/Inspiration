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