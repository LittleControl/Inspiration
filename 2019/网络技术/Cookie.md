# Cookie

## Cookie的意义

回话跟踪技术  
Cookie 客户端使用  
Session 服务端使用  
对于我的理解而言就是Cookie就是保存客服端的用户的状态,然后用户刷新或者重新打开网页时可以简化一些操作

## Cookie的使用

`document.cookie='key=value;expires=date;path=myPath;domain=myDomain`

## Cookie的作用范围

Cookie的过期时间如果没有指定date,则默认为一次会话,即关闭浏览器之后则Cookie失效;  
指定了date的时候,则Cookie的失效时间为指定的Date;
Cookie没有指定path和domain的时候,默认在当前路径下的文件都可以共享Cookie;  
  例如我给`127.0.0.1/day12/Cookie.html`设置了一个Cookie,则`127.0.0.1/day12/CookieTest.html`也可以使用该Cookie

## Cookie的注意事项

- 对于Cookie而言,一次只能存储一个key=value,多余的key=value会被忽略
- 当指定的date对于当前而言是已经是过去的时间时,Cookie会立即失效
- Cookie是有大小限制的,一般限制为20~50个,大小为4KB左右
- 一般设置Cookie的path都为'/',domain为当前路径的顶级域名
- 同一个域名下只能有一个key对应的cookie,否则会被覆盖,不同的域名下可以有相容key的Cookie

## 封装Cookie的增加查询删除方法

```JavaScript
//添加一个Cookie
function addCookie(cookie) {
        var date = new Date()
        date.setDate(date.getDate() + 7)
        cookie.expires = cookie.expires || date.toUTCString()
        cookie.path = cookie.path || '/'
        cookie.domain = cookie.domain || defaultDomain()
        console.log(cookie)
        document.cookie = cookie.key + '=' + cookie.value + ';expires=' + cookie.expires + ';path=' + cookie.path +
            ';domain=' + cookie.domain + ';'
    }
//查询一个Cookie
function findCookie(key) {
    var cookie = document.cookie.split(';')  
    for(let i = 0; i < cookie.length; i++){
        temp = cookie[i].trim().split('=')
        if(temp[0] == key){
            break;
        }
        if(i == cookie.length-1 && temp[0] != key){
            temp[1] = 'Nothing can be founded!'
        }
    }
    return temp[1]
}
//删除一个Cookie
function delCookie(key,path) {
    addCookie({
        key: key,
        path:path || '/',
        expires: new Date(1)
    })
}
//设置默认域名的函数
function defaultDomain() {
    domain = window.location.pathname
    var tag = domain.indexOf('/')
    domain = domain.slice(0, tag)
    return domain
}
```
