# EventEmitter

Simple encapsulation of event subscription and publication

## Installation

```sh
npm install eventemitter-ice

# or

yarn add eventemitter-ice
```

## Usage

CDN

```html
<script src="./dist/event-emitter.js"></script>
```

Module

```js
import EventEmitter from 'eventemitter-ice'

const eventEmitter = new EventEmitter()
```

## Example

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

### Options

| param | description | type | default value |
| ----- | ----------- | ---- | ------------- |
| -     | -           | -    | -             |

### Methods

| name | description                                                                    | param                                  |
| ---- | ------------------------------------------------------------------------------ | -------------------------------------- |
| on   | Message event binding function                                                 | eventsName: string, callback: function |
| once | Message event binding function, which is fired only once by the bound function | eventsName: string, callback: function |
| off  | Cancel message event                                                           | id: number                             |
| emit | Trigger message                                                                | eventsName: string, data: any          |

## License

Copyright (c) 202O ytICE. (MIT License)
