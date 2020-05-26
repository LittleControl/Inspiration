/* setTimeout(() => console.log('1'), 0)
console.log(2)
let status = true
new Promise((resolve, reject) => {
    if (status) {
        resolve(3)
    } else {
        reject()
    }
}).then((value) => console.log(value))
console.log(4)
setTimeout(() => console.log('5')) */

setTimeout(() => console.log(1), 0);
console.log(2)
const intervalId = setInterval(() => console.log(3), 0)
setTimeout(function () {
    console.log(4)
    new Promise((resolve) => {
        console.log(5)
        resolve()
    })
        .then(() => console.log(6))
        .then(() => {
            console.log(7)
            clearInterval(intervalId)
        })
}, 0);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
console.log(10)

// 2 10 8 9 1 3 4 5 6 7
