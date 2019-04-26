import BooleanAdjacencyList from './BooleanAdjacencyList'

class UndirectedBooleanAdjacencyList extends BooleanAdjacencyList {
  constructor(nodeFactory){
    super(nodeFactory)
  }

  _addEdge(a,b){
    const obj = this.getArrayObject(a);
    if( obj ){
      obj.neighbors[b] = true
    }
  }

  addEdge(a,b){
    this._addEdge(a,b)
    this._addEdge(b,a)
  }
}

export default UndirectedBooleanAdjacencyList
