# Android ROM的解包和打包

## 环境要求

- 基于Linux,因为win下比较麻烦
- 刷机包为卡刷包

## 步骤

解压卡刷包一般得到如下文件

- `firmware-update`
- `META-INF`
- `boot.img`
- `system.new.dat.br`
- `system.patch.dat`
- `system.transfer.list`
- `vendor.new.dat.br`
- `vendor.patch.dat`
- `vendor.transfer.list`

这里我们以system为例,vendor和system是一样的.因为boot.img较为复杂,这里不作了解和阐述.  
需要注意的,对于`system.new.dat.br 和 system.patch.dat 和 system.transfer.list`,其实都是三位一体的(大概),反正你知道这三个是一个东西出来的就好了,后面解包打包的时候会用到.

## 解包

### br转dat

br格式的文件相当于是dat文件又进行了一次压缩,所以要先进行这一步操作  
不同的发行版有各自的软件包管理系统,使用这个软件仓库就可以直接安装`brotli`  
类似,像我一样的ArchLinux,可以直接`pacman -S brotli`  
Debian应该可以直接`apt install brotli`  
安装好`brotli`之后运行命令,`brotli -d system.new.dat.br`,这布操作需要的时间可能会有点久,耐心等待即可.  
然后我们就得到了`system.new.dat`

### dat转img

img格式的文件才是我们最后需要的文件格式.这一步我们需要将dat文件转为img文件  
需要用到python,和GitHub上的一个项目`sdat2img`:<https://github.com/xpirt/sdat2img>

```shell
git clone https://github.com/xpirt/sdat2img
cd sdat2img
python sdat2img.py system.transfer.list system.new.dat system.img
```

需要注意的是,这一步用到了list文件和dat文件,最后一个参数是生成文件名,patch好像暂时不用用到.

### 挂载img

前面我们已经得到system.img,这一步我们需要将其挂载到磁盘上,然后就可以方便的访问里面的文件了

```shell
sudo mkdir -p /mnt/system
sudo mount -o loop system.img /mnt/system
```

然后就直接可以去`/mnt/system`目录下进行修改了,因为我也不是很懂安卓,所以也不能做过多的阐述.我一般也就是精简一些系统内置的App或者加入一些想要增加的app,仅仅只是对内置应用修改的话,直接操作`/app`目录和`/priv-app`目录就可以了.需要注意文件的权限问题,参考修改之前的文件权限就可以了

## 打包

### 生成img文件

这里需要用到make_ext4fs这个工具包,项目链接:<https://github.com/superr/make_ext4fs>

```shell
git clone https://github.com/superr/make_ext4fs.git
cd make_ext4fs
make
```

以上就编译完成了这个make_ext4fs,然后执行一下命令
`make_ext4fs -T 0 -l 1024M -a system system.new.img /mnt/system`

- -T 代表对镜像中的unix文件时间戳进行设置，这里设置为0，表示1970-1-1
- -l 表示目标镜像的大小。如果不懂得写多少可以使用df -h命令查看挂载点/mnt/system的总大小，然后取整数（512M,1024M,2048M…），比如查得挂载点空间大- 小是992M,你就得写1024M
- -a 指定目标img文件在Android中的挂载点
- system.new.img 表示生成的镜像
- /mnt/system/ 表示源目录

这时候就可以卸载system分区了,`umount /mnt/system`

### img转dat

用到的工具img2sdat<https://github.com/xpirt/img2sdat>

```shell
git clone https://github.com/xpirt/img2sdat.git
cd img2sdat
./img2sdat.py system.img -o ./ -v 4
```

这样就会在当前目录下生成`system.new.bat`, `system.patch.dat`, `system.transfer.list`,更多用法请查看原项目链接

### dat转br

`brotli -0 system.new.bat`

## 更新压缩包

这时候我们已经得到了新的`system.new.bat.br`, `system.patch.dat`, `system.transfer.list`,替换它们原来的压缩包就可以了  
`zip yourROM.zip system.new.dat.br system.transfer.list system.patch.dat`

## 这次system分区的修改就结束了,vendor分区类似

可以将更新后的卡刷包刷机试试,注意备份数据,因为随时可能会翻车
