# Linux上安装MongoDB数据库

## 先提供下载链接

<https://www.mongodb.com/download-center/community>
![MongoDB下载页面](https://s2.ax1x.com/2019/06/01/V1DvSe.png "Mongo")
注意,这里我们一定要选择TGZ格式的下载  
然后就是解压,啥的这些基本操作我就不多说了,解压完成以后我们要开始配置环境变量,要做的就是吧MongoDB的各种脚本文件添加到系统环境变量中,这样我们就可以才任意路径下执行数据库命令. 

## 配置环境变量

我们知道,所有的环境变量都是在`/etc/profile`这个文件中的,我们要做的就是把MongoDB文件夹下的`bin`目录导入环境变量中  
你用`gedit`或者`vim`都可以,打开这个`/etc/profile`文件,在最后加入一下代码

```shell
export PATH=$PATH:/opt/mongodb/bin
```

这里的`/opt/mongodb/bin`是你的MongoDB文件夹下的bin的路径,具体的你要根据自己文件夹所在的目录更改.  
接着执行`source /etc/profile`命令,这样就可以使环境变量立即生效,然后就可以在命令行输入`mongod`命令,如果提示没有这个命令或者操作,看看自己的文件路径对不对,如果还不行就重启一下电脑,因为有的Linux发行版对于`source`的兼容性不是很好,比如我的`Ubuntu 19.04`  

## 配置MongoDB数据文件

接着我们需要创建一个`data`目录存放数据,`data`目录下有两个文件夹`db`和`logs`,`db`目录必须位于`data`目录下,`logs`倒无所谓,看你自己的习惯了,创建目录的操作我就不多说了吧.  
然后就是数据库的配置了,我们需要创建一个文件,文件名任意,文件存储路径任意,我这里是`/opt/mongod.conf`文件,也就是在`/opt`目录下新建了一个`mongod.conf`文件.重要的是文件的内容,在文件中填入一下内容

```shel
port=27017
fork=true
dbpath=/opt/mongodb/data/db
logappend=true
logpath=/opt/mongodb/data/logs/mongo.log
```

这里面所有涉及到文件路径的,都要变成你自己实际文件的路径,这里只是演示我的文件路径,需要注意的是`logpath`的路径一定最后定位到`文件`,不能是一个`目录`,否则后面就可能会出现各种各样的问题

## 启动数据库

首先打开命令行,输入命令`mongod -f /etc/mongod.conf`,这里还是,最后的路径是你自己的配置文件的路径,如果出现一下提示,则证明大功告成
![命令提示](https://s2.ax1x.com/2019/06/01/V1yErj.png "命令提示")
如果出现错误,后面会有解决方法,假设现在你已经成功了,接着在命令行输入`mongo`,如果返回这样的信息则说明真的没有问题了
![Successfully](https://s2.ax1x.com/2019/06/01/V1ywRO.png "成功")

## 关于启动数据库失败的解决方案

[Linux里MongoDB启动失败的解决方案](https://www.littlecontrol.top/linux%E9%87%8Cmongodb%E5%90%AF%E5%8A%A8%E5%A4%B1%E8%B4%A5%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/)
