define([],function () {
    console.log('module1 is running')
    let name = 'LittleControl'
    let getName = () => {
        //注意,这里不可以用this.name,否则就可能会出现一些奇奇怪该的BUG
        return name
    }
    return {getName}
})