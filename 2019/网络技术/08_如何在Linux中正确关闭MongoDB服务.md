# 如何在Linux中正确关闭MongoDB服务

对于MongoDB在Linux中配置就挺麻烦的,这个东西关闭也是很讲究的.  
先说一下官方给出的方法,原链接如下<https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/#stop-mongod-processes>  
![官方文档](https://s2.ax1x.com/2019/06/01/V1gRF1.png "官方文档")
![官方文档](https://s2.ax1x.com/2019/06/01/V1ggoR.png "官方文档")
那我就直接翻译一下了,我这无处安放的土式中式英语  

- 使用 `shutdownServer`方法
  简单就是利用`mongo`进入数据库的命令行,使用`use admin`进入管理员数据路,再输入`db.shutdownServer()`结束数据库服务
- 使用`--shutdown`方法
  这是`mongod`命令的参数,使用这个可以快速结束数据库服务,也是小控最常用的结束数据库命令
  需要注意的,这个参数必须和你启动`mongod`的参数一致,举个例子,你启动时用的命令是`mongod -f /etc/mongod.conf`,  
  那么你关闭时候的命令也必须是这样子`mongod -f /etc/mongod.conf --shutdown`
- 使用`Ctrl + c`
  如果你启动`mongod`时没有以守护进程的方式启动,意思也就是你的`mongod`没有在后台运行,那你就可以在`mongod`的运行的命令窗口里使用`Ctrl+c`  
  来终止这个`mongod`进程
- 使用`kill`命令
  如果你知道了`mongod`的pid值,那么你也可以使用kill命令来终止`mongod`进程,一般的格式有两个
  `kill <mongod process ID>`或者`kill -2 <mongod process ID>`,这个`mongod process ID`就是`mongod`进程的pid值
  注意!!! 千万不要使用`kill -9`命令来终止`mongod`进程
  