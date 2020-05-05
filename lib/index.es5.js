/**
 * Subscription and publication of events
 *
 * @export
 */
export default function EventEmitter() {
  this._events = {}
  this.subID = 0
}

/*
 * @desc Add a subscription
 *
 * @param {String} eventsName Subscribe to the topic
 * @param {Function} callback Subscribe to topic callbacks
 * @param {Boolean} once
 * @returns {Number} The subscription ID
 */
EventEmitter.prototype.on = function (eventsName, callback, once) {
  if (!eventsName || !callback) return false
  if (typeof callback !== 'function') {
    throw new TypeError(`
      The event callback must be a function,
      please check the parameter you passed in,
      the current parameter listener: ${callback.toString()}
    `)
  }
  this._events[eventsName] = this._events[eventsName] || []
  this._events[eventsName].push({
    once: Boolean(once),
    id: ++this.subID,
    callback,
  })
  return this.subID
}

/*
 * @desc Add a subscription, which is executed only once
 *
 * @param {String} eventsName Subscribe to the topic
 * @param {Function} callback Subscribe to topic callbacks
 * @returns {Number} The subscription ID
 */
EventEmitter.prototype.once = function (eventsName, callback) {
  return this.on(eventsName, callback, true)
}

/*
 * @desc cancel subscribe
 *
 * @param {Number} id The subscription ID
 * @returns {EventEmitter} EventEmitter Constructor instance
 */
EventEmitter.prototype.off = function (id) {
  for (var key in this._events) {
    var event = this._events[key]
    if (event) {
      for (var i = 0, len = event.length; i < len; i++) {
        if (event[i].id === id) {
          event.splice(i, 1)
        }
      }
    }
  }
  return this
}

/*
 * @desc Publish specific subscription
 *
 * @param {String} eventsName Subscribe to the topic
 * @param {Any} data Subscribe to the topic callback parameter
 * @returns {PublishSubscribe} EventEmitter Constructor instance
 */
EventEmitter.prototype.emit = function (eventsName, data) {
  if (!this._events[eventsName]) return false
  var subscribes = this._events[eventsName]
  for (var i = 0, len = subscribes.length; i < len; i++) {
    subscribes[i].callback.call(this, data)
    if (subscribes[i].once) {
      this.off(subscribes[i].id)
    }
  }
  return this
}
