import { abstractMethodError } from '../Utils'

class AbstractNodeFactory {
  constructor() { }
  static create() { abstractMethodError("NodeFactory.create") }
  static compare(a, b) { abstractMethodError("NodeFactory.compare") }
  static equals(a, b) { abstractMethodError("NodeFactory.equals") }
  static getKey(node) { return node.key }
}

export default AbstractNodeFactory
