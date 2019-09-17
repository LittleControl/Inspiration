let obj = {}
let obj2 = { name: 'Little' }
// console.log(obj, obj2)
function isEmpty(obj) {
    return JSON.stringify(obj) === '{}'
}
// console.log(isEmpty(obj))
// console.log(isEmpty(obj2))

let res = Object.keys(obj)
let res2 = Object.keys(obj2)
// console.log(res, res2)

for (let i in obj2) {
    // console.log(i)
}

function isEmpty2(obj) {
    for (let i in obj) {
        return false
    }
    return true
}

// console.log(isEmpty2(obj))//true
// console.log(isEmpty2(obj2))//false

let obj3 = {}
let sym = Symbol('Nothing')
obj3[sym] = function() {
    // console.log(this[sym])
}
// console.log(obj3[sym])
obj3[sym]()
// console.log(obj3)//{ [Symbol(Nothing)]: [Function] }
// console.log(isEmpty2(obj3))//true
// console.log(Object.keys(obj3))

function isEmpty3(obj) {
    if(Object.keys(obj).length === 0) {
        return true
    }
    return false
}
// console.log(isEmpty3(obj3))//true

let arr = []
let arr2 = [1,2,'abc']
function isEmptyArr(arr) {
    return JSON.stringify(arr) === '[]'
}
console.log(isEmptyArr(arr))//true
console.log(isEmptyArr(arr2))//false
console.log(arr.length)
