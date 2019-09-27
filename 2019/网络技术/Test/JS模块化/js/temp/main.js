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