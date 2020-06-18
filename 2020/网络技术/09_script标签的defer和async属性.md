# script标签中的defer和async属性

## async

- `<script src="index.js" async></script>`  
- 设有`async`属性的脚本不会打断HTML文档的解析,但是一旦加载完毕就会立即执行——无论此刻是HTML解析阶段还是 `DOMContentLoaded`触发之后.
- 需要注意的是，这种方式加载的 JavaScript 依然会阻塞 load 事件。换句话说，async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行.
- 需要注意的是,async脚本的执行顺序是不确定的.
- async适用于普通脚本和模块脚本,不适用于内嵌脚本

## defer

- `<script src="index.js" defer></script>`
- 设有`defer`属性的脚本也不会打断HTML文档的解析,与async不同的是,defer脚本即使已经加载完毕也不会立即执行,而是一定会在HTML文档解析完毕的时候执行.
- 也就是在`DOMContentLoaded`会执行所有由 defer-script 加载的 JavaScript 代码
- 需要注意的是,defer不会改变代码的执行顺序
- defer只适用于普通脚本,不适用于模块脚本和内嵌脚本,(模块脚本默认defer)
