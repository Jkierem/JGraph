import AbstractNodeFactory from './AbstractNodeFactory'

class GenericNodeFactory extends AbstractNodeFactory {
  constructor(){
    super()
  }

  create(key,value){
    return {
      key,
      value
    }
  }

  compare(a,b){
    return a.key == b.key ? 0 : 1 ;
  }
}

export default GenericNodeFactory
