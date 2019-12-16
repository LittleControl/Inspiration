# 怎么优雅的使用flex布局

## 基本作用

flex布局简单来说就是弹性布局,当元素大小变化的时候,相应的元素的布局也可以自动调整.

## 简单使用

最外层的元素,我们称之为容器,容器里面的一个个元素我们称之为项目.

### 布局在容器上的属性

#### display

```css
.box {
    display: flex;
}
/* 行内元素也可以使用flex布局 */
.in_box {
    display: inline-flex;
}
```

#### flex-direction

```css
/* flex-direction决定主轴的方向,即项目是从左到右排列还是从右到左等等 */
.box {
  flex-direction: row | row-reverse | column | column-reverse;
  /* 默认为 row */
  /* 从左到右 从右到左 从上到下 从下到上 */
}
```

#### flex-wrap

```css
/* flex-wrap决定当项目超越容器的容纳度的时候,超出的项目的排列方式,换行 or不换行/ */
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
  /* 默认为 nowrap */
  /* 不换行 换行 换行且超出的元素在上面的一行 */
}
```

#### flex-flow

```css
/* flex-flow 是flex-direction 和 flex-wrap 的简写形式 */
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
  /* 默认为 raw nowrap */
}
```

#### justify-content

```css
/* justify-content 定义了主轴上剩余空间的排列方式 */
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
  /* 默认值为 flex-start */
  /* 在最后一个项目的末尾以此排开 在第一个项目的前面排开 在第一个项目的前面和最后一个项目的后面均分排列 在项目中间均匀分布 在项目中间以及头尾部均匀分布 */
}
```

##### flex-start  

![flex-start](https://s2.ax1x.com/2019/12/08/QdFMj0.png)

##### flex-end  

![flex-end](https://s2.ax1x.com/2019/12/08/QdFbCj.png)

##### center

![center](https://s2.ax1x.com/2019/12/08/Qdkkx1.png)

##### space-between

![space-between](https://s2.ax1x.com/2019/12/08/QdkQGd.png)

##### space-arround

![space-around](https://s2.ax1x.com/2019/12/08/Qdk0Rs.png)

#### align-items

```css
/* align-items 定义项目在垂直主轴方向上的排列方式 */
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
    /* 默认为flex-start */
}
```

##### flex-start(align-items)

![flex-start](https://s2.ax1x.com/2019/12/08/QdA1kF.png)

##### center(align-items)

![center](https://s2.ax1x.com/2019/12/08/Qdnd0I.png)

##### baseline

![baseline](https://s2.ax1x.com/2019/12/08/QduMvQ.png)

##### stretch

![stretch](https://s2.ax1x.com/2019/12/08/QdugPK.png)

#### align-content

```css
/* align-content 定义了多个主轴在主轴的垂直方向上的排列方式 */
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  /* 默认值为flex-start */
  /* 注意,当只有一条主轴的时候,即flex-wrap的时候为nowrap的时候该属性是没有效果的 */
  /* 其他的类似于项目在主轴上的排列方式 */
}
```

### 布局在项目上的属性

#### order

```css
/* order规定了项目在容器中的排列顺序,数值越小越靠前 */
.item {
  order: <integer>;
  /* 默认值为0 */
}
```

下面的图片2和4的order的值都为-1,其他的都是默认值
![Order](https://s2.ax1x.com/2019/12/16/Q4QRl6.png)

#### flex-grow

```css
/* 当存在剩余空间的时候,定义项目的放大比例 */
.item {
  flex-grow: <number>; /* default 0 */
  /* 默认值为0, 即不放大 */
}
```

下面的135为flex-grow的值为2,其他的值为默认值
![flex-grow](https://s2.ax1x.com/2019/12/16/Q41SKK.png)

#### flex-shrink

类似于flex-grow,flex-shrink用来定义,当空间不足的时候,项目的缩小的比例

#### flex-basis

```css
/* flex-basis用来定义项目在主轴上的初始大小 */
.item {
  flex-basis: <length> | auto;
  /* 默认值为auto, 即项目原来的大小 */
  /* 浏览器用该值来计算主轴的空间是否多余或者不足 */
}
```

#### flex

```css
/* flex是flex-grow, flex-shrink, flex-basis的简写形式 */
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  /* 默认值为0 1 auto */
  /* 该属性有两个快捷值 auto=1 1 auto 和 none=0 0 auto */
}
```

#### align-self

```css
/* align-self 允许单个项目拥有与其他的项目同的排列方式 */
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
  /* 默认值为auto, 即继承父元素的align-item属性 */
}
```

下图的3设置的align-self为flex-end,其他的项目都是默认值
![align-self](https://s2.ax1x.com/2019/12/16/Q4GfdU.png)

---
End
