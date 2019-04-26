import BooleanAdjacencyMatrix from './BooleanAdjacencyMatrix'

class UndirectedBooleanAdjacencyMatrix extends BooleanAdjacencyMatrix {
  constructor(vertexFactory){
    super(vertexFactory)
  }

  _addEdge(a,b){
    if( !this.adj[a] ){
      this.adj[a] = {}
    }
    this.adj[a][b] = 1
  }

  addEdge(a,b,value){
    this._addEdge(a,b)
    this._addEdge(b,a)
  }
}

export default UndirectedBooleanAdjacencyMatrix
