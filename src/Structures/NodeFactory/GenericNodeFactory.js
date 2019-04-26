import AbstractNodeFactory from './AbstractNodeFactory'

class GenericNodeFactory extends AbstractNodeFactory {
  constructor() {
    super()
  }

  static create(key, value) {
    return {
      key,
      value
    }
  }

  static compare(a, b) {
    return a.key == b.key ? 0 : 1;
  }

  static equals(a, b) {
    return GenericNodeFactory.compare(a, b) == 0
  }
}

export default GenericNodeFactory
