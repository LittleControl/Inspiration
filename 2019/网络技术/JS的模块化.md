# JS的模块化

## 是什么,为什么

在我看来,JS模块化就是降低耦合度,然后就是结构清晰,好维护,引包的时候也方便.我们来看一下没有模块化我们怎么使用JS函数的  
![没有模块话化的JS](https://s2.ax1x.com/2019/09/21/nxZ7gx.png)
可以看到,才三个函数,我们就需要导入三次包,那么浏览器也就会发三次请求,更别说我们有更多的函数了,更重要的是,假如`function3`依赖于`function2`,`function2`依赖于`function1`,那么我们导入包的顺序也不可以错,确实是很不方便也是很容易出错.可能我们开发的时候知道顺序和逻辑顺序,但是开发完成后我们维护的时候,就比较麻烦了

## 现有的模块化规范

现在流行的有四种模块化规范,分别是`AMD`,`CMD`,`commonJS`和`ES6`,这里分别来简单介绍一些使用方法

### `AMD`

符合`AMD`规范,我们最常使用的就是`requireJS`,这里是它的官网地址[RequireJS](https://requirejs.org),简单介绍一下怎么使用`requireJS`. 我们的项目目录结构如下

- JS Module
  - JS
    - app.js
    - modules
      - module1.js
      - module2.js
      - module3.js
    - libs
      - sea.js
      - require.js
  - index.html

`app.js`是我们最后模块汇总的文件,`modules`里面存放我们自定义的功能模块.`libs`里是我们需要引用的包  
对于`requireJS`,我们在模块的语法就是`define([module1,module2,..],function(m1,m2,...){//DIY codes return xxx})`.`也就是说我们必须把所有的东西都放在define`函数的参数中.  
对于`define`函数而言,有两个参数,第一个是一个数组,里面是你这个模块所引用的其他模块的名称,第二参数就是一个回调函数,回调函数的参数对应着`define`第一参数数组中的东西,也就是`m1`就是`module1`模块的返回值,`m2`就是`module2`模块的返回值.然后在回调函数体中就是自定义我们的代码了.最后需要注意的就是,最后我们需要用`return`语句来返回,也就是所谓的暴露,即别的模块引用这个模块的时候你想给它使用的东西,`return`的数据类型是没有要求的,一般我们都是`return`一个对象

```JavaScript
//module1.js
//因为module1没有依赖其他模块,所以我们define的一个参数为一个空数组,当然也可以省略不写
define([],function () {
    console.log('module1 is running')
    let name = 'LittleControl'
    let getName = () => {
        //注意,这里不可以用this.name,否则就可能会出现一些奇奇怪该的BUG
        return name
    }
    return {getName}
})
//module2.js
define(['module1'],function(m1) {
    console.log('module2 is running')
    let age = 18
    let getPerson = () => {
        return m1.getName() + ' ' + age
    }
    //注意这里的返回值
    return getPerson
})
//module3.js
define(['module2'],function (m2) {
    console.log('module3 is running')
    let website = 'www.littlecontrol.top'
    let getWeb = () => {
        return m2() + ' ' + website
    }
    return {getWeb}
})
//app.js
(function () {
    require.config({
        baseUrl: 'js/modules/',
        path: {
            module1: './module1',
            module2: './module2',
            module3: './module3',
        }

    })
    require(['module1', `module3`], function (m1, m3) {
        console.log(m1.getName())
        console.log(m3.getWeb())
    })
})()
```

解释一下`app.js`的结构,首先明确一个概念就是所有的模块都是基于`app.js`这个文件寻找的,因为这个文件提供各个模块的具体路径.然后来解释一下`app.js`的文件内容  
`require.config`这个函数就是明确各个模块的路径,`baseUrl`可以指定基于的路径,默认为`app.js`这个文件所在路径,然后`path`就是模块的路径,里面的相对路径是相对于`baseUrl`的.然后在`app.js`里还可以继续编写自己的代码.只不过不是用`define`而是用`require`这个函数,与`define`的格式类似.完成`app.js`以后我们就需要在页面上引入了,`requireJS`只需要一个`script`标签就可以,就是这样子`<script data-main="./js/app.js" src="./js/libs/require.js"></script>` `src`里引入的是我们需要的`requireJS`的包,而`data-main`里面就是我们最后汇总的那个js文件,输出结果如下
![输出结果](https://s2.ax1x.com/2019/09/21/nxKMY4.png)
需要注意的是,这个`requireJS`的模块路径配置一直总感觉有问题,至今为止我都没有搞懂到底原理是是什么,如果你把`baseUrl`改为`js/modules`后,再把`path`里的`modules`去掉,发现就出问题了,还有就是引入类似与`JQuery`这样的第三方模块的时候也是很麻烦,这里就不做过多阐述

## CMD
