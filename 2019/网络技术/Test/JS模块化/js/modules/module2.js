define(['module1'],function(m1) {
    console.log('module2 is running')
    let age = 18
    let getPerson = () => {
        return m1.getName() + ' ' + age
    }
    return getPerson
})