// const unuse = 'unuse variable!'

export default class EventEmitter {
  constructor() {
    this._events = {}
    this.subID = 0
  }

  /**
   * @description Add a subscription
   *
   * @param {string} eventsName Subscribe to the topic
   * @param {function} callback Subscribe to topic callbacks
   * @param {boolean} once emit once
   * @returns {number | void} id
   * @memberof EventEmitter The subscription ID
   */
  on(eventsName, callback, once) {
    if (!eventsName || !callback) return
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

  /**
   * @description Add a subscription, which is executed only once
   *
   * @param {String} eventsName Subscribe to the topic
   * @param {function} callback Subscribe to topic callbacks
   * @returns {number | void}
   * @memberof EventEmitter
   */
  once(eventsName, callback) {
    return this.on(eventsName, callback, true)
  }

  /**
   * @description cancel subscribe
   *
   * @param {number} id The subscription ID
   * @returns {EventEmitter} EventEmitter Constructor instance
   * @memberof EventEmitter
   */
  off(id) {
    for (const key in this._events) {
      var event = this._events[key]
      if (event) {
        for (let i = 0, len = event.length; i < len; i++) {
          if (event[i].id === id) {
            event.splice(i, 1)
          }
        }
      }
    }
    return this
  }

  /**
   * @description Publish specific subscription
   *
   * @param {string} eventsName Subscribe to the topic
   * @param {any} data Subscribe to the topic callback parameter
   * @returns {PublishSubscribe} EventEmitter Constructor instance
   * @memberof EventEmitter
   */
  emit(eventsName, data) {
    if (!this._events[eventsName]) return this
    const subscribes = this._events[eventsName]
    for (let i = 0, len = subscribes.length; i < len; i++) {
      const { callback, id, once } = subscribes[i]
      callback.call(this, data)
      if (once) {
        this.off(id)
      }
    }
    return this
  }
}
