import AdjacencyMatrix from './AdjacencyMatrix'
import { isDefined , keysOf } from '../../Utils'

class BooleanAdjacencyMatrix extends AdjacencyMatrix {
  constructor(vertexFactory){
    super(vertexFactory)
  }

  addEdge( a, b ){
    if( !this.adj[a] ){
      this.adj[a] = {}
    }
    this.adj[a][b] = 1
  }

  getEdge(a,b){
    return !!this.adj[a]?.[b]
  }

  getAllEdges(){
    return keysOf(this.adj).reduce( (acc,startKey) => {
      return [ ...acc , ...keysOf(this.adj[startKey]).map(
        (endKey) => ({ start: startKey , end: endKey })
      )]
    },[])
  }
}

export default BooleanAdjacencyMatrix
