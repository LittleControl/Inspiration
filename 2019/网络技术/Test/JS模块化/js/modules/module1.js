define(function (require, exports, module) {
    let name = 'LittleControl'
    console.log('Module1 is running')
    function getName() {
        return name
    }
    exports.getName = getName
})