function Emitter() {
  let events = {}
  let subId = 0

  function subscribe(eventName, fn) {
    subId++
    if (!events[eventName]) events[eventName] = {}
    events[eventName][subId] = fn

    return {
      unsubscribe: () => {
        delete events[eventName][subId]
      },
    }
  }

  function emit(eventName, ...args) {
    if (!events[eventName]) return false
    Object.keys(events[eventName]).forEach(subId =>
      events[eventName][subId].apply(null, args),
    )
  }

  return {
    subscribe,
    emit,
  }
}

var exports = (module.exports = Emitter)
