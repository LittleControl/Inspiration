# 基于搭建LAMP搭建typecho中遇到的问题

因为之前的服务器快到期了,所以最近就准备进行服务器的迁移.因为WordPress用久了,再加上是国外的服务器,所以就准备换成Typecho这个相对来说比较简便轻量的系统.下面就是中间遇到的一些步骤和坑.

##　关闭防火墙服务

- `systemctl stop firewalld`  
- `systemctl stop iptables`

反正一个是firewall服务,一个是iptables服务,都关闭就好了.然后如果是云服务器的话,需要在供应商的安全组之类的东西中开放相应的端口.

## 配置和安装MySQL

因为yum直接安装MySQL的话是MariaDB,是MySQL的一种实现.但是我们想要最纯正正宗的MySQL.这里选择MySQL5.7来进行安装.也可选择到[官网](https://dev.mysql.com/downloads/repo/yum/)选择合适的版本下载.

- 安装MySQL源  
  `wget http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm`  
  `rpm -ivh mysql57-community-release-el7-8.noarch.rpm`
- 安装MySQL  
  `yum install mysql-community-server`
- 启动  
  `systemctl start mysqld`  
- 修改root登录密码  

  1. 注意,如果你之前又安装过MySQL并且没有删除干净的吧,那么root的登录密码还是你原来的root密码.这里假设你之前没有安装过MySQL.如果之前装过,但是忘记了root密码的话,这里有一个偏方,你先安装现在的这个MySQL,然后再卸载了,然后再安装一下就好了.因为系统的卸载会帮你卸载干净的.
  2. 然后执行一下命令,查看安装完成后随机生成的root密码  
     `grep 'temporary password' /var/log/mysqld.log`
  3. 使用上面语句输出的密码登录MySQL  
     `mysql -uroot -p`  
  4. 进入MySQL后然后在使用以下命令修改root密码  
     `ALTER USER root@localhost IDENTIFIED BY 'Your Password';`这个`Your Password`改为你自己想设置的密码就可以.

##　最后的话

其他的什么Web服务器，Apache和PHP之类的东西,就不用我多说了吧.然后就是关于Typecho的安装,跟着文档走可以了.
