# EventEmitter

事件的订阅与发布的简单封装

## 安装

```sh
npm install eventemitter-ice

# 或者

yarn add eventemitter-ice
```

## 使用

CDN

```html
<script src="./dist/event-emitter.js"></script>
```

模块中引用

```js
import EventEmitter from 'eventemitter-ice'

const eventEmitter = new EventEmitter()
```

## 示例

```js
import EventEmitter from 'eventemitter-ice'

const emitter = new EventEmitter()
emitter.on('close', function (data) {
  alert('close: ' + data)
})
emitter.once('open', function (data) {
  alert('open: ' + data)
})
emitter.emit('open', 'open the window')
```

## API

### 配置参数

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| -    | -    | -    | -      |

### 方法

| 方法名称 | 说明                                   | 参数                                   |
| -------- | -------------------------------------- | -------------------------------------- |
| on       | 消息事件绑定函数                       | eventsName: string, callback: function |
| once     | 消息事件绑定函数，被绑定函数只触发一次 | eventsName: string, callback: function |
| off      | 取消消息事件                           | id: number                             |
| emit     | 触发消息                               | eventsName: string, data: any          |

## 证书

Copyright (c) 202O ytICE. (MIT License)
