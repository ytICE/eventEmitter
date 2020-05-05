const eventEmitter = require('../dist/event-emitter')

describe('subscription and publication of events', () => {
  it('add a subscription topic', () => {
    const event = new eventEmitter()
    event.on('open', () => {
      return 'open emiter'
    })
    expect(event._events.open.length).toBe(1)
  })

  it('delete a subscription topic', () => {
    const event = new eventEmitter()
    const id = event.on('open', (data) => {
      return data
    })
    event.off(id)
    expect(event._events.open.length).toBe(0)
  })

  it('trigger the subscription', (done) => {
    const event = new eventEmitter()
    function callback(data) {
      try {
        expect(data).toBe('the open event is triggered')
        done()
      } catch (error) {
        done(error)
      }
    }
    event.on('open', callback)
    event.emit('open', 'the open event is triggered')
  })
})
