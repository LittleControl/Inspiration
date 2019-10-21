# `JavaScript`中`typeof`与`instanceof`的区别与联系

***

## typeof

typeof用于检测某个变量是否属于某一类型,typeof为单元运算符,返回值为String类型

```JavaScript
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
console.log(typeof(typeof nu))//string,这里证明typeof的返回值是一个String

```

值得注意的是,对于数组,对象已经null,其typeof的运算结果都是object

## instanceof

instanceof用于检查某个对象是否是某个类型或其父类型的实例

```JavaScript
console.log(arr instanceof Array)//true
console.log(fun instanceof Array)//false
console.log(nu instanceof Object)//false
// console.log(nu instanceof null)//报错,null是基本数据类型,不是引用数据类型
```

## typeof与instanceof的区别与联系

区别:

- typeof是单目运算符,而是instanceof是双目运算符
- typeof用于检查变量的所属类型,而instanceof检查变量是否是某个对象的示例
- instanceof的右侧变量一定需要是一个引用数据类型,即对象

联系:
  由于null,数组,以及object的typeof都是object,所以当需要判断某一变量的数据类型为object时,还需要instance来做进一步判断

  ```JavaScript
  console.log(arr instanceof Array)
  console.log(arr instanceof Object)
  ```
