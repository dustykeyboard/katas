const Node = function Node(nData, nLeft = null, nRight = null) {
  const data = nData
  let left = nLeft
  let right = nRight

  return {
    data,
    left,
    right,
  }
}

const Tree = function Tree(data = null) {
  let root = data ? Node(data) : null

  function display(node = root, padding = '') {
    if (!node) return
    console.log(padding, node.data)
    padding += '  '
    if (node.left) display(node.left, padding)
    if (node.right) display(node.right, padding)
  }

  function inOrder(fn = console.log, node = root) {
    if (node.left) {
      inOrder(fn, node.left)
    }

    fn.call(this, node.data)

    if (node.right) {
      inOrder(fn, node.right)
    }
  }

  function insert(...values) {
    values.forEach(data => {
      let current
      if (root === null) {
        root = Node(data)
      } else {
        current = root
        while (true) {
          if (data > current.data) {
            if (current.right === null) {
              current.right = new Node(data)
              break
            } else {
              current = current.right
            }
          } else {
            if (current.left === null) {
              current.left = Node(data)
              break
            } else {
              current = current.left
            }
          }
        }
      }
    })
  }

  function find(value, node = root, parent = null) {
    if (node === null) return

    if (node.data === value) return { node, parent }

    if (value > node.data) {
      if (node.right === null) return
      return find(value, node.right, node)
    } else {
      if (node.left === null) return
      return find(value, node.left, node)
    }
  }

  function findValue(value) {
    const found = find(value)
    return found ? found.node.data : null
  }

  function findSmallestNode(node = root) {}

  function removeNode(node, parent = null) {
    let replaceWith = null
    if (!node.left && !node.right) {
      replaceWith = null
    } else if (node.left && !node.right) {
      replaceWith = node.left
    } else if (node.right && !node.left) {
      replaceWith = node.right
    } else {
      let smallestNode = node.right
      let smallestParent = node
      while (smallestNode.left) {
        smallestParent = smallestNode
        smallestNode = smallestNode.left
      }
      removeNode(smallestNode, smallestParent)
      replaceWith = Node(smallestNode.data, node.left, node.right)
    }

    if (!parent) {
      root = replaceWith
    } else {
      if (parent.right === node) {
        parent.right = replaceWith
      } else {
        parent.left = replaceWith
      }
    }
  }

  function remove(value) {
    const { node, parent } = find(value)

    return node ? removeNode(node, parent) : false
  }

  return {
    display,
    insert,
    remove,
    inOrder,
    findValue,
  }
}

var exports = (module.exports = Tree)
