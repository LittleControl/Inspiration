# JavaScript中的Error对象

港真,记得很久之前学习JS语法的时候,并没有特别关注过这个Error对象.只知道可以累死像Java一样可以`try...catch`抛出异常以外,并没有怎么特别关注过.不过之后也确实用的很少,自己写代码一般都是不会用到的.看别人写的时候偶尔会看到.最近在学习TS语法的时候,关于nerver数据类型的介绍中,都是以抛出一个异常作为例子,所以今天就好好整理一下这个知识点.

通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象也可用于用户自定义的异常的基础对象.

## 语法

`new Error([message[, fileName[,lineNumber]]])`

### 参数

- message 可选。人类可阅读的错误描述信息
- filename 可选。被创建的Error对象的fileName属性值。默认是调用Error构造器代码所在的文件 的名字
- lineNumber 可选。被创建的Error对象的lineNumber属性值。默认是调用Error构造器代码所在的文件的行号

## 用法

当像函数一样使用 Error 时 -- 如果没有 new，它将返回一个 Error 对象。所以， 仅仅调用 Error 产生的结果与通过new 关键字构造 Error 对象生成的结果相同

```JavaScript
let e1 = Error('Something is wrong!')
let e2 = new Error('Something is wrong!')
console.log(e1)
console.log(e2)
//这里e1与e2是一样的提示错误
```

### 属性或方法

- Error.prototype.name  //错误名
- Error.prototype.message  //错误信息
- Error.prototype.toSting()  //类似于name+message吧

## Error的类型

### 内置类型(既是一种类型,又是一种构造方法)

一般用于处理某一特定类型的错误和判断

- EvalError 创建一个error实例，表示错误的原因：与 eval() 有关
- InternalError 创建一个代表Javascript引擎内部错误的异常抛出的实例。 如: "递归太多"
- RangeError 创建一个error实例，表示错误的原因：数值变量或参数超出其有效范围
- ReferenceError 创建一个error实例，表示错误的原因：无效引用
- SyntaxError 创建一个error实例，表示错误的原因：eval()在解析代码的过程中发生的语法错误
- TypeError 创建一个error实例，表示错误的原因：变量或参数不属于有效类型
- URIError 创建一个error实例，表示错误的原因：给 encodeURI()或  decodeURl()传递的参数无效

```JavaScript
let e3 = new RangeError()
console.log(e3 instanceof RangeError)//true
console.log(e3)//RangeError
```

### 自定义类型

```JavaScript
function MyError(message) {
  this.name = 'MyError';
  this.message = message || 'Default Message';
  this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
  throw new MyError();
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'Default Message'
}

try {
  throw new MyError('custom message');
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'custom message'
}
```
