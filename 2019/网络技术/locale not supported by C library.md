# locale not supported by C library

- 基本环境: Arch Linux + Gnome
- 出现的问题: 执行命令时命令行提示`locale not supported by C library`

## 解决办法

最近也是一直在折腾Arch Linux,最后对于桌面环境的选择选择了Gnome,也算是我的老东家了.但是安装后之后进入Gnome之后,发现没有命令行.起初我以为是没有配置`ctrl+alt_t`快捷键,后来发现从应用列表打开也打开不了.值得庆幸的是,之前使用kde桌面的时候,留下来了一个终端,是叫啥来着,反正是一个Y开头的东西.这个终端是可以打开的.当我从这个终端里执行`gnome-terminal`时,命令行就返回了`locale not supported by C library`的错误,后来一直查资料才解决这个问题

1. 首先编辑`/etc/locale.gen`文件,用vim或者gedit都可以,记住如果是非root用户的话要用sudo来执行
2. 在`locale.gen`文件中,把你要使用的语言取消注释,可以选择多个,也就是把语言前面的`#`删掉,一般都是`en-US UTF-8 UTF-8`和`zh-CN UTF-8 UTF-8`
3. 然后以管理员权限执行`locale.gen`命.注意,这里是直接执行,也就是这样`sudo locale.gen`
4. 最后执行`locale`命令,即`locale`

总的来说就三个命令就搞定了

1. `sudo gedit /etc/locale.gen`
2. `sudo locale.gen`
3. `sudo locale`
