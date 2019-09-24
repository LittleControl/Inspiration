define(function (require, exports, module) {
    let website = 'www.littlecontrol.top'
    console.log('Module2 is running')
    let module1 = require('./module1')
    function getFull() {
        return module1.getName() + ' : ' + website
    }
    module.exports = getFull
})