# Windows下使用MongoDB

虽说MongoDB已经使用了很久了,应该算是入门了.但是总是有一些不称心的地方.在Linux下倒无所谓.但是在Windows下就特别麻烦.想要指定路径运行就很费劲了,而且Windows对于长路径及其的不友好.这里就总结了一下关于在Windows里使用MongoDB的一些步骤,日后备忘.

## 基本配置

- 建议下载zip格式的软件包,然后解压到自己想要的位置
- 创建data目录,建议和MongoDB软件在同一个位置,这样也方便查看.data目录下有两个文件夹,一个名称为db.另一个是log
  - db 此文件夹为空即可
  - log 该文件夹下还要创建一个空白文件,建议命名为mongod.log
- 创建配置文件,建议命名为mongod.cfg,且和MongodDB在同一目录下,便于查看

mongod.cfg的配置如下:

```yaml
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

storage:
  dbPath: E:\MongoDB\data\db
  journal:
    enabled: true
systemLog:
  quiet: true
  destination: file
  path: E:\MongoDB\data\log\mongod.log
  logAppend: true
net:
  port: 27017
  bindIp: 127.0.0.1

```

其他的参数可以查看[官方文档](http://docs.mongodb.org/manual/reference/configuration-options/)配置,一般而言,只需要更改你的storage里的dbPath和systemLog里的Path修改为你的db文件夹路径和log文件夹路径即可  
然后这时候你的路径配置大概就是这个样子了
[![tW1DtH.png](https://s1.ax1x.com/2020/06/08/tW1DtH.png)](https://imgchr.com/i/tW1DtH)

## 添加环境变量

将MongoDB目录下的bin目录添加到环境变量Path中,这样就可以在任意位置调用mongdb的相关命令

## 注册Windows服务

当然每次从命令行启动也可以,但是为了省事,就可以注册为一个Windows服务,这样就可以节省掉很多时间.一劳永逸(大雾).  
以管理员的身份打开命令行,键入一下命令`mongod --config "E\MongoDB\mongod.cfg" --install --serviceName "MongoDB"`,这个是命令的基本形式,相关的参数还是需要根据自己的实际情况来.执行了上述命令之后就可以去Windows的服务列表是查找并启动MongoDB服务即可,然后就可以使用相关的软件连接数据库了.
