# CSS水平垂直居中

假设html的代码结构如下,我们目的是要使inner这个div相对于wrap这个div垂直水平居中

```html
<div class="wrap">
    <div class="inner"></div>
</div>
```

## flex(简单灵活,强烈推荐)

```CSS
.wrap {
    width: 900px;
    height: 600px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bfa;
}
.inner {
    width: 300px;
    height: 300px;
    background-color: coral;
}
```

## position

使用定位的基本思想就是首先相对于父容器上和左各移动50%,然后再使用某些手段,倒退移动自身大小的50%

### position + transform(推荐,不需要知道自身和父容器的宽高)

```CSS
.wrap {
    width: 900px;
    height: 600px;
    margin: auto;
    position: relative;
    background-color: antiquewhite;
}
.inner {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: pink;
}
```

### position + margin(同样不需要知道自身和父容器的宽高)

```CSS
.wrap {
    width: 900px;
    height: 600px;
    margin: auto;
    position: relative;
    background-color: antiquewhite;
}

.inner {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: skyblue;
}
```

具体的原因我也不是很清楚.简单的解释就是当给一个绝对定位的元素定位方向指定数值的时候,也就是top,left等设置了值,流体特性就发生了.具有流体特性绝对定位元素的margin:auto的填充规则和普通流体元素一模一样：

- 如果一侧的值固定，另一侧值为auto，auto为剩余空间大小；
- 如果两侧值都为auto,则平分剩余空间

### position + margin-(top/left)(最原始朴素的方式,需要知道自身的宽高)

```CSS
.wrap {
    width: 900px;
    height: 600px;
    margin: auto;
    position: relative;
    background-color: antiquewhite;
}

.inner {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -150px;
    margin-left: -150px;
    background-color: blueviolet;
}
```
