var num = 1
var str = 'str'
var boolean = true
var arr = []
var obj = {}
var fun = function(){}
var unde = undefined
var nu = null
console.log(typeof num)//number
console.log(typeof str)//string
console.log(typeof boolean)//boolean
console.log(typeof arr)//object
console.log(typeof obj)//object
console.log(typeof fun)//function
console.log(typeof unde)//undefined
console.log(typeof nu)//object
console.log(typeof(typeof nu))//string
console.log(arr instanceof Array)//true
console.log(fun instanceof Array)//false
console.log(nu instanceof Object)//false
// console.log(nu instanceof null)//报错