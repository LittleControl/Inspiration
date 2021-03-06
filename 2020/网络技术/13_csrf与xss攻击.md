# csrf与xss攻击

## csrf

跨站请求伪造(Cross-site request forgery),也被称为one-click或者session riding,通常缩写为CSRF或者XSRF.  
是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法.  
跟xss相比,xss利用的是用户对指定网站的信任,csrf利用的是网站对用户网页浏览器的信任

### 攻击细节

简单说就是欺骗用户去访问一个曾经认证过的网站并执行一些操作(如发邮件,财产操作等)  
假如我使用的某银行用于转账操作的地址为`https://bank.examle.com/withdraw?account=Little&amount=1000&for=Control`  
那么,有心者可以在它自己的网站中设置如下代码`<img src="https://bank.examle.com/withdraw?account=Little&amount=1000&for=Control">`  
那么,当我访问这有心者的网站的时候,就会无意间除法了银行的转账操作,进而造成财产损失

总的来说,攻击者并不能通过csrf攻击在直接获取用户的账户控制权,也不能直接窃取用户的任何信息.它们能做的是,欺骗用户的浏览器,让其以用户的名义执行操作

### 防御措施

- 令牌同步模式
- 检查Referer字段
- 添加校验token

## xss

跨站脚本指令码(Cross-site scripting), 是一种网站应用程序的安全漏洞攻击,是代码注入的一种.它允许恶意使用者将代码注入到网页上,其他使用者在观看网页时就会收到影响.这类攻击通常包含了HTML以及使用者端脚本语言

### 攻击类型

- 存储性(持久型)XSS, 注入型脚本永久存储在目标服务器上,当浏览器请求数据时,脚本从服务器上返回并执行
- 反射性(非持久型)XSS, 简单来说就是攻击者通过特定的方式去诱惑受害者去访问一个包含恶意代码的URL,当受害者点击恶意链接url的时候,恶意代码会直接在受害者的主机上执行. 或者从另一个角度说,这个恶意代码存在于攻击者的服务器上,当我们点击恶意链接->请求攻击者服务器->服务器返回恶意代码
- 基于DOM的XSS: 通过修改原始的客户端代码,受害者浏览器的DOM环境改变,导致有效载荷的执行.也就是说,页面本身没有变化,但由于DOM环境被恶意修改,有客户端的代码被包含进了页面,并且意外执行.就像你本地打开控制台,手动修改HTML的内容一般,本来的HTML是没有问题的,你这一改可能就出现问题了.而攻击者就是在你不知情的条件下,修改了DOM等

### xss防御措施

- HttpOnly, 如果某个cookie带有httponly属性,那么这一条cookie将被禁止读取,也就是说,JavaScript读取不到这条cookie,不过与服务端交互的时候,httpRequest包中人仍会带上这个cookie信息,即我们的正常交互不受影响
- 输入过滤
- 输出编码
