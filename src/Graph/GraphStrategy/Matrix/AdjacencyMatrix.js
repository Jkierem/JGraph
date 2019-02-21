import AbstractGraphStrategy from '../AbstractGraphStrategy'
import { isDefined , keysOf } from '../../Utils'

class AdjacencyMatrix extends AbstractGraphStrategy {
  constructor(vertexFactory){
    super(vertexFactory);
    this.adj = {}
  }

  addEdge( a, b, value ){
    if( !this.adj[a] ){
      this.adj[a] = {}
    }
    this.adj[a][b] = value
  }

  getEdge(a,b){
    return this.adj[a]?.[b]
  }

  getAllEdges(){
    return keysOf(this.adj).reduce( (acc,startKey) => {
      return [ ...acc , ...keysOf(this.adj[startKey]).map(
        (endKey) => ({ start: startKey , end: endKey , value:this.adj[startKey][endKey] })
      )]
    },[])
  }

  hasEdge(a,b){
    return isDefined(this.get(a,b))
  }

  getNeighbors(key){
    return keysOf(this.adj[key])
  }
}

export default AdjacencyMatrix;
