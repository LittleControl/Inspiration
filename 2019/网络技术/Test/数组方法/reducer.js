let arr = [1, 2, 3, 4, 5]
const reducer = function (acc, value, index, arr) {
    return acc + value + index
}
let res = arr.reduce(reducer)
console.log(res)
