let str = 'Nothing'
let arr = Array.from(str)
console.log(arr)
let arr2 = Array.from(str, item => item.toLocaleUpperCase())
console.log(arr2)
