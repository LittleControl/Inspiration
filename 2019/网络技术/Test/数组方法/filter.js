let arr = [1, 5, 12, 32, 17, 25, 6, 4, 9]
let newArr = arr.filter(item => item < 10)
// console.log(arr)
// console.log(newArr)
// console.log(arr.every(item => item < 10))
// console.log(newArr.every(item => item < 10))
console.log(arr.some(item => item < 10))
console.log(newArr.some(item => item < 10))