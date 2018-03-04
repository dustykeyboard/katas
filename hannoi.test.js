const Hannoi = require('./hannoi')

const generateTower = function generateTower(height) {
  let tower = []
  for (var i = height; i > 0; i--) {
    tower.push(i)
  }
  return tower
}

const exampleTower = generateTower(12)

const hannoi = Hannoi(exampleTower)
console.log(hannoi.state())
const moves = hannoi.solve()
console.log(hannoi.state())
console.log(`Solved in ${moves} moves`)
