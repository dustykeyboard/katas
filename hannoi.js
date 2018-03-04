const Hannoi = function Hannoi(initialTower = []) {
  const height = initialTower.length
  let towers = [initialTower, [], []]
  let moves = 0

  function state() {
    return towers
  }
  function move(from, to) {
    moves++
    towers[to].push(towers[from].pop())
  }
  function moveTower(height, from, to, via) {
    if (height < 1) return
    moveTower(height - 1, from, via, to)
    move(from, to)
    moveTower(height - 1, via, to, from)
  }
  function solve() {
    moves = 0
    moveTower(height, 0, 2, 1)
    return moves
  }

  return {
    state,
    solve,
  }
}

var exports = (module.exports = Hannoi)
