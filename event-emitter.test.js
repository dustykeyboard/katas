const Test = require('./test')
const Emitter = require('./event-emitter')

Test(
  'Creates object with .subscribe and .emit methods',
  (() => {
    const emitter = Emitter()
    return emitter.hasOwnProperty('subscribe') && emitter.hasOwnProperty('emit')
  })(),
  true,
)

Test(
  'Subscription object has .unsubscribe method',
  (() => {
    const emitter = Emitter()
    const subscription = emitter.subscribe('eventName', () => {})
    return subscription.hasOwnProperty('unsubscribe')
  })(),
  true,
)

Test(
  'Subscription fn called by .emit',
  (() => {
    let counter = 0
    const emitter = new Emitter()
    const sub1 = emitter.subscribe('counter', () => counter++)
    const sub2 = emitter.subscribe('counter', () => counter++)
    emitter.emit('counter')
    return counter
  })(),
  2,
)

Test(
  'Subscription.unsubscribe prevents fn call from .emit',
  (() => {
    let counter = 0
    const emitter = new Emitter()
    const sub1 = emitter.subscribe('counter', () => counter++)
    const sub2 = emitter.subscribe('counter', () => counter++)
    sub2.unsubscribe()
    emitter.emit('counter')
    return counter
  })(),
  1,
)
