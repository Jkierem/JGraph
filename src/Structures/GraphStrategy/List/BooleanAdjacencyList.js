import AdjacencyList from './AdjacencyList'
import { keysOf } from '../../Utils'

class BooleanAdjacencyList extends AdjacencyList {
  constructor(nodeFactory){
    super(nodeFactory)
  }

  addEdge(a,b){
    const obj = this.getArrayObject(a);
    if( obj ){
      obj.neighbors[b] = true
    }
  }

  getAllEdges(){
    return this.nodes.flatMap( ({ node , neighbors }) => {
      return keysOf(neighbors).map( (neigh) => {
        return {
          start: this.nodeFactory.getKey(node),
          end: neigh
        }
      }) 
    })
  }
}

export default BooleanAdjacencyList
