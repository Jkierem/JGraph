import AbstractNodeFactory from './AbstractNodeFactory'

class NamedVertexFactory extends AbstractNodeFactory {
  constructor() {
    super()
  }

  static create(name) {
    return {
      name,
    }
  }

  static compare(a, b) {
    return a.name.localeCompare(b.name)
  }

  static getKey(node) {
    return node.name
  }

  static equals(a, b) {
    return NamedVertexFactory.compare(a, b) == 0
  }
}

export default NamedVertexFactory
