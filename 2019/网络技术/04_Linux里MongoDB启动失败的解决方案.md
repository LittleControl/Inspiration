# Linux里MongoDB启动失败的解决方案

前几天在配置MongoDB时发生了以下几个错误, 还是在这记录一下吧,免得以后又遇到这种情况

## 问题一

`ERROR: child process failed, exited with error number 100`

错误原因: mongodb非正常关闭 删除mongod.lock文件即可.
之后再启动`mongod`前先修复一下举个例子先进行一下操作,先进行如下操作`mongod -f /etc/mongod.conf --repair`  
然后再输入`mongod -f /etc/mongod.conf`启动数据库服务

## 问题二

`ERROR: child process failed ,exited with error number 1`  
可能的原因:

1. dbpath文件的权限问题,增加写权限即可
2. logpath的路径不争取,切记,logpath最终定位应该到一个文件而不是一个目录 

## 问题三

`child process failed, exited with error number 48`
可能的原因:

1. 这个可能还是logs的问题,可以尝试把它生产的日志文件删除,在重新启动一下
2. 还有一个可能就是你的mongod服务没有关闭而又重新启动了一个mongod服务,可以先把上一个mongod服务关闭再重新启动

## 关于如何正确关闭MongoDB数据库

对于问题一,是我们最经常遇到的,那到底如何正确关闭MongoDB数据库,使其不产生mongod.lock文件呢,给个链接
[如何在Linux中正确关闭MongoDB数据库服务](https://www.littlecontrol.top/%E5%A6%82%E4%BD%95%E5%9C%A8linux%E4%B8%AD%E6%AD%A3%E7%A1%AE%E5%85%B3%E9%97%ADmongodb%E6%9C%8D%E5%8A%A1/)