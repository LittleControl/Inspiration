(function () {
    require.config({
        baseUrl: 'js/modules/',
        path: {
            module1: './module1',
            module2: './module2',
            module3: './module3',
        }

    })
    require(['module1', `module3`], function (m1, m3) {
        console.log(m1.getName())
        console.log(m3.getWeb())
    })
})()