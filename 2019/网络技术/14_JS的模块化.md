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

`CMD`里我们最常使用的库就是`seaJS`,好像是阿里写的这个,据说后来又卖给了别人,咱也不知道,咱也不敢问.`seaJS`的语法与`AMD`的语法类似,先给出`seaJS`的官方链接[seaJS](https://seajs.github.io/seajs/docs/).然后我们的目录结构于上文的`AMD`中的目录结构,只不过我们这里要用的是库是`sea.js`.`seaJS`的模块定义语法与`AMD`类似,也是用`define`来定义,只不过`define`可以有三个参数,`require,exports,module`,其中,`require`参数用于解决依赖关系,当这个模块依赖于其他模块的时候,就需要`require`来引入所依赖的模块.而`exports`和`module`主要用于向外暴露模块.

```JavaScript
//module1.js
//因为module1模块不依赖于其他模块,所以也可以省略require参数
define(function (require, exports, module) {
    let name = 'LittleControl'
    console.log('Module1 is running')
    function getName() {
        return name
    }
    exports.getName = getName
})

//module2.js
define(function (require, exports, module) {
    let website = 'www.littlecontrol.top'
    console.log('Module2 is running')
    let module1 = require('./module1')
    function getFull() {
        return module1.getName() + ' : ' + website
    }
    module.exports = getFull
})

//module3.js
//这里使用了一个异步加载包,关于异步加载会在主模块之中说明
define(function (require, exports, module) {
    console.log('Module3 is running')
    let age = 18
    /* 注意这里要是异步加载模块2的时候,在回调函数里exports的值可能在main.js中拿不到  */
    // require.async('./module2', function (module2) {
    //     console.log('async module2 is finished')
    //     console.log(module2)
    //     exports.web = {
    //         website: module2(),
    //         age
    //     }
    // })

    let module2 = require('./module2')
    exports.web = {
        website: module2(),
        age
    }
})

//app.js
//因为主模块不需要向外暴露模块,所以就省略了exports和module参数
define(function (require) {
    // let module3 = require('./modules/module3')
    // console.log(module3.web)
    //这里使用异步加载模块的方式,可以不阻塞主线程的运行,异步加载模块的方法有两个参数
    //第一个参数是要异步加载的模块,第二参数是一个回调函数,用于执行模块加载完成后的参数,其中回调函数的参数便是要加载的模块
    require.async('./modules/module3', function (m3) {
        console.log(m3)
        console.log(typeof m3)
        console.log(m3.web)
    })
})

```

```HTML
//与AMD不同的是,在index.html使用CMD的方法,具体的script标签如下
<script src="./js/libs/sea.js"></script>
<script>
    seajs.use('./js/app.js')
</script>
//即我们在引入seajs包之后,还有再使用seajs的use方法加载我们的主模块
```

输出结果如下
![seaJS的输出结果](https://s2.ax1x.com/2019/09/24/uktP1J.png)

## CommonJS

`CommonJS`的用法与`Node`一样,其实,本来`Node`就是实现的`CommonJS`的模块化规范.对于服务器端到没有什么,对于浏览器端则需要一些特殊的处理  

### 基本语法(用法)

可以说,`CommonJS`的语法与`Node`一模一样,也就`require`,`module`和`exports`这三个关键字,具体内容如下

```JavaScript
//module1.js
console.log('module1 is running');
let name = 'LittleControl'
exports.name = name

//moduel2.js
console.log('module2 is running')
let module1 = require('./module1')
let website = 'www.littlecontrol.top'
module.exports = {
    website: website,
    getFull() {
        return module1.name + ' ' + website
    }
}

//module3.js
console.log('module3 is running')
let module2 = require('./module2')
let weibo = '@LittleControl'
module2.exports = {
    web: weibo + ' ' + module2.getFull()
}

//app.js
let module3 = require('./modules/module3')
console.log(module3.web)

```

最后需要注意的是,浏览器并没有实现`CommonJS`规范,所以我们最后需要将文件打包编译成浏览器认识的规范,这里我们用到的工具叫做`browserify`,在命令行指令命令`npm install browserify -g`后,我们便可以使用这个编译工具.有点幸运的是,我们只需要编译`app.js`这个一个文件就可以,`browserify`会帮我们把其他的工作做的很好,我们至只需要在命令行键入以下命令即可`browserify ./app.js -o ./dist/bundle.js`,这个命令的参数也是通俗易懂,第一个参数为你要编译的文件,也就是主模块文件,然后加一个`-o`表示输出,然后后面的就是你要输出的文件路径及文件名,这里我习惯输出为`build.js`或者`bundle.js`,然后我们只需要在html文件中只引入这一个文件即可,`index.html`中的引入的所有`script`标签就一个足以,`<script src="./js/dist/bundle.js"></script>`,这样就可以了  
简单来说,就是browserify把所有的模块的内容都帮你整合进了这个`bundle.js`,我们只需要引入这一个文件即可.  
输出结果
![CommonJS](https://s2.ax1x.com/2019/09/27/uKFOnf.png)

## ES6

ES6目前应该是公认的最好用的模块化规范了吧,就是纯手动打包的话比较麻烦,结合自动打包工具的话简直不要太爽,虽然,我一个打包工具也不会  
废话不多说,直接上教程,ES6的模块化规范有几个关键字`export`,`default`和`import..from`.我们从代码里来看这三个关键字怎么用.  
这次我们把源码写在新目录`/js/src`下面  

```JavaScript
//module1.js
/* 单独暴露 */
//单独使用export的方法我们叫做单独暴露,格式就是 export + value,可以暴露一个任意数值类型的数据
export function fun1() {
    console.log('fun1()... module1')
}
export function fun2() {
    console.log('fun2()... module1')
}

//module2.js
/* 统一暴露 */
//这里我们暴露一个对象,而对象里面存放着我们的数据(方法,变量等)
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

//module3.js
/* 默认暴露 */
//这里我们用到了一个关键字default,稍后会在主模块中讲解
let fun5 = () => {
    console.log('fun5()... module3')
}
let fun6 = () => {
    console.log('fun6()... module3')
}

export default { fun6, fun5 }

//main,js
/* 主模块 */
/*
    对于模块1和模块2,并不是想CommonJS那样接受,我们需要用import来导入,并且需要用一个对象来接受
        需要注意的是,这个对象并不是一般的对象,里面的属性和方法需要与模块暴露出来的一致,否则就无法接受到模块暴露出来的数据
        对于模块1和模块2的引入方式,对象的写法是ES6的简写方式
    因为模块3在暴露的时候使用了default关键字,所以可以用一个变量接受模块3的返回值,而这个变量上就会绑定模块3暴露的所有数据
        我们把使用了default关键字的暴露方式叫做默认暴露

    因为浏览器是不认识import等关键字的,所以需要我们手动编译,这时候需要一个工具,叫做babel

*/
import { fun1, fun2 } from './module1'
import { fun3, fun4 } from './module2'
import module3 from './module3'

fun1()
fun2()
fun3()
fun4()
module3.fun5()
module3.fun6()

```

### 编译文件

#### 使用工具babel

1. 运行以下命令安装所需的包（package）

    ```shell
    npm install -g bable
    npm install -g bable-cli
    <!-- 这一部安装很重要 -->
    npm install babel-preset-es2015 --save-dev
    ```

2. 在项目的根目录下创建一个名为`.babelrc`的文件,文件内容为

    ```JSON
    {
        "presets": ["es2015"]
    }
    ```

3. 在命令行键入以下命令`babel ./src -out-dir ./temp`

这样我们便把`src`目录下的所有文件编译到了`temp`目录下  
然后我们发现就是`temp`目录下的所有文件都其实已经是符合`CommonJS`规范的了,所以我们还需要再利用`browserify`工具进行二次编译  
键入一下命令`browserify ./temp/main.js -o ./dist/main.js`,这样我们得到了最终可以引入的js文件  
最后在`index.html`中引入就可以了.  
输出结果如下
![ES6模块化](https://s2.ax1x.com/2019/09/27/uK18SK.png)
总结一下,感觉还是ES6更直观明了一些,但是ES6打包编译实在是太麻烦了,所以后面需要学习自动化构建打包工具,这样就会省事好多.
