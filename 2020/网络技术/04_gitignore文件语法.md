# Git中gitignore文件的配置语法

## 语法规范

- 空行或是以#开头的行即注释行将被忽略。
- 可以在前面添加正斜杠/来避免递归
- 可以在后面添加正斜杠/来忽略文件夹
- 可以使用!来否定忽略
- `*`用来匹配零个或多个字符, `[]`用来匹配括号内的任一字符, 也可以在括号内加连接符，如`[0-9]`匹配0至9的数；`?`用来匹配单个字符。

```gitignore

# 这是一个gitignore文件, 注释和空行将被忽略

# 仅仅忽略根目录下build文件下的index.js文件
/build/index.js

#忽略项目中所有build目录下的index.js
build/index.js

# 忽略项目中所有的index.js文件
index.js

# 忽略所有目录下的node_modules文件夹下的所有内容
node_modules/

# 忽略项目中所有的以txt结尾的文件
*.txt

# 不忽略config下的info.txt文件
!/config/info.txt

```

需要注意的是: **.gitignore配置文件是按行从上到下进行规则匹配的,意味着如果前面的规则匹配的范围更大,则后面的规则将不会生效**

```gitignore
/build/index.js
# 这样的话下面这条语句不会生效,因为前文并没有出现有关config的范围,所以默认就是全部添加,不必再单独添加文件
!/config/index.js
```
