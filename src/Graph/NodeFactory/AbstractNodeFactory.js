import { abstractMethodError } from '../Utils'

class AbstractNodeFactory {
  constructor(){}
  create(){ abstractMethodError("NodeFactory.create") }
  compare(a,b){ abstractMethodError("NodeFactory.compare") }
  getKey(node){ return node.key }
}

export default AbstractNodeFactory
