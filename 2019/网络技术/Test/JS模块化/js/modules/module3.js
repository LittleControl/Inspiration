define(['module2'],function (m2) {
    console.log('module3 is running')
    let website = 'www.littlecontrol.top'
    let getWeb = () => {
        return m2() + ' ' + website
    }
    return {getWeb}
})