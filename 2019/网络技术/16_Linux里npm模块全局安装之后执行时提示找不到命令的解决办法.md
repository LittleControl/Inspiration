# Linux里npm模块全局安装之后执行时提示找不到命令

环境: Linux
本质还是环境变量的问题,即npm安装的模块,没有注册为环境变量,所以在命令行里无法执行命令.
解决办法:

在命令行执行`npm prefix -g`,可以查看node全局环境的目录在哪里,一般也就是你的node安装路径  
我们这里假设你的node安装目录为`/usr/node`

## 环境变量配置(Linux)

Linux里的环境变量有三种:

    - 当前用户的当前shell有效(即临时环境变量,关闭这个shell之后就会失效)
    - 当前用户有效
    - 所有用户有效

1. 临时环境变量的配置

    在当前shell中运行一下命令即可  
    `=$PARH:/usr/node/bin`

2. 对当前用户有效

    修改用户目录下的`.bashrc`文件  
    `sudo gedit ~/.bashrc`  
    在文件最后添加该语句  
    `PATH=$PATH:/usr/node/bin`  
    重启登录之后即可生效

3. 对所有用户有效

    修改`/etc/profile`文件  
    `sudo gedit /etc/profile`  
    在末尾添加一下内容  
    `export PATH="$PATH:/usr/node/bin"`  
    重启登录即可
