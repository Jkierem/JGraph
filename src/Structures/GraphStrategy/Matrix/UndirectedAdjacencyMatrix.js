import AdjacencyMatrix from './AdjacencyMatrix'

class UndirectedAdjacencyMatrix extends AdjacencyMatrix {
  constructor(vertexFactory){
    super(vertexFactory)
  }

  _addEdge(a,b,value){
    if( !this.adj[a] ){
      this.adj[a] = {}
    }
    this.adj[a][b] = value
  }

  addEdge(a,b,value){
    this._addEdge(a,b,value)
    this._addEdge(b,a,value)
  }
}

export default UndirectedAdjacencyMatrix
