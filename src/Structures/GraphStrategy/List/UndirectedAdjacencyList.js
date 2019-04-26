import AdjacencyList from './AdjacencyList'

class UndirectedAdjacencyList extends AdjacencyList {
  constructor(nodeFactory){
    super(nodeFactory)
  }

  _addEdge(a,b,value){
    const obj = this.getArrayObject(a);
    if( obj ){
      obj.neighbors[b] = value
    }
  }

  addEdge(a,b,value){
    this._addEdge(a,b,value)
    this._addEdge(b,a,value)
  }
}

export default UndirectedAdjacencyList
