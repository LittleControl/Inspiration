# 作为一个前端弱鸡,不会Ajax,不会session怎么办

## 目前想到的唯一解决方法

- 不会Ajax就多写几个页面,比如登录成功是一个页面,登录失败一个页面,不会Ajax就意味着提交只能同步提交,所以需要返回一些提示页面,
  也不是需要很多页面,只不过需要根据状态来进行提示,或者根据返回状态增加或隐藏某些东西(比如登录成功就不用显示密码错误的提示等)
- 不会session相关技术只能在每个页面加入有关账户的查询字符串,以保证用户登录的连续性,必须,在index页面登录了一个用户,那么理论上在这index页面的所有的连接地址(必须要求登录的页面),后面都应该加入可以判别用户身份的查询字符串,这样才能保证用户的操作权限的正确性

对于不利用Session技术记录用户登录状态的例子吧

```html
<!-- 在登录界面你已经获得了用户的登录信息,且该用户登录成功了,然后跳转到了index页面 -->
<!-- 那么在index页面里,有关这么几个用户的操作 -->
<a>增加</a>
<a>删除</a>
<a>修改</a>
<a>查询</a>
<!-- 如果要验证用户信息的有效性,则必须在a标签的跳转地址加入查询字符串 -->
<a href="/add?id=littlecontrol@qq.com">增加</a>
<a href="/delete?id=littlecontrol@qq.com">删除</a>
<a href="/update?id=littlecontrol@qq.com">修改</a>
<a href="/query?id=littlecontrol@qq.com">查询</a>
<!-- 那么这样就可以在用户点击每个操作的时候,根据查询字符串的内容检查用户的合法性,从而造成一种记录了用户登录状态的假象 -->
```

经过这样的方法,我们可以说看起开就是记录了用户登录状态的假象,实际上每次操作都是根据查询字符串来验证用户的身份,但是因为每个用户的id等不一样,所以每个用户登录以后的index渲染出来的a标签的查询字符串也不一致,这样就可以区别不同用户的信息,进而可以完成一些有关权限的操作了.  
因为我Ajax和Session一点都没有学过,所以目前记录用户登录状态的办法只能想到这样做,也是没有办法的办法的,还是要努力学习新知识呀!
