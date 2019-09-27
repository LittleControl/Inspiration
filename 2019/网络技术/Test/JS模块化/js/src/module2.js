/* 统一暴露 */

let fun3 = () => {
    console.log('fun3()... module2')
}
let fun4 = () => {
    console.log('fun4()... module2')
}

/* function fun3() {
    console.log('fun3()... module2')
}

function fun4() {
    console.log('fun4()... module2')
} */

export { fun3, fun4 }
