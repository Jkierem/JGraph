import AbstractNodeFactory from './AbstractNodeFactory'

class NamedVertexFactory extends AbstractNodeFactory {
  constructor(){
    super()
  }

  create(name){
    return {
      name,
    }
  }

  compare(a,b){
    return a.name.localeCompare(b.name)
  }

  getKey(node){
    return node.name
  }
}
