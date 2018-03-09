function Emitter() {
  let i = 0,
    events = {}

  return {
    subscribe: (eventName, fn) => {
      events[eventName] = events[eventName] || {}
      events[eventName][++i] = fn
      return { unsubscribe: () => delete events[eventName][i] }
    },
    emit: (eventName, ...args) => {
      Object.entries(events[eventName] || {}).forEach(([_, fn]) =>
        fn.apply(null, args),
      )
    },
  }
}

var exports = (module.exports = Emitter)
