!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.EventEmitter = t())
    : (e.EventEmitter = t())
})(window, function () {
  return (function (e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var o = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 0))
    )
  })([
    function (e, t, n) {
      'use strict'
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      n.r(t),
        n.d(t, 'default', function () {
          return o
        })
      var o = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this._events = {}),
            (this.subID = 0)
        }
        var t, n, o
        return (
          (t = e),
          (n = [
            {
              key: 'on',
              value: function (e, t, n) {
                if (e && t) {
                  if ('function' != typeof t)
                    throw new TypeError(
                      '\n        The event callback must be a function,\n        please check the parameter you passed in,\n        the current parameter listener: '.concat(
                        t.toString(),
                        '\n      '
                      )
                    )
                  return (
                    (this._events[e] = this._events[e] || []),
                    this._events[e].push({
                      once: Boolean(n),
                      id: ++this.subID,
                      callback: t,
                    }),
                    this.subID
                  )
                }
              },
            },
            {
              key: 'once',
              value: function (e, t) {
                return this.on(e, t, !0)
              },
            },
            {
              key: 'off',
              value: function (e) {
                for (var t in this._events) {
                  var n = this._events[t]
                  if (n)
                    for (var r = 0, o = n.length; r < o; r++)
                      n[r].id === e && n.splice(r, 1)
                }
                return this
              },
            },
            {
              key: 'emit',
              value: function (e, t) {
                if (!this._events[e]) return this
                for (var n = this._events[e], r = 0, o = n.length; r < o; r++) {
                  var i = n[r],
                    u = i.callback,
                    f = i.id,
                    a = i.once
                  u.call(this, t), a && this.off(f)
                }
                return this
              },
            },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        )
      })()
    },
  ]).default
})
