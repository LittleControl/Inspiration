# CSS外边距重叠

## 定义

MDN定义: 块的上外边距(margin-top)和下外边距(margin-bottom)有时合并(折叠)为单个边距，其大小为单个边距的最大值(或如果它们相等，则仅为其中一个)，这种行为称为边距折叠

::: tip
注意有设定`float`和`position=absolute`的元素不会产生外边距重叠行为
:::

## 会出现外边距重叠的情况

- 同一层相邻元素之间
- 没有内容将父元素和子元素分开(最需要注意)
- 空的块级元素
