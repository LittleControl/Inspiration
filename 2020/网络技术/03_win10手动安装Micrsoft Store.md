# win10安装微软商店

两行命令搞定,理论适用win10所有版本

- 安装win+x后按a调出Windows Power Shell
- `get-AppxPackage -allusers *windowsstore*`
- 将获得的InstallLocation替换到`get-AppxPackage -allusers *windowsstore*`
