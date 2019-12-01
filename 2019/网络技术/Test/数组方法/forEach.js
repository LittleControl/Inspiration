let arr = ['Nothing', 'Little', 'Control', 'Avalon']
arr.forEach((value, index, arr) => {
    console.log(value, index, arr)
    value = value.toUpperCase()
    console.log(value, index)
})
console.log(arr)
