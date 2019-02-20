import { AdjacencyMatrix } from '../GraphStrategy'
import { NamedVertexFactory } from '../NodeFactory'

class Graph{
  constructor( nodeFactory=NamedVertexFactory , graphStrategy=AdjacencyMatrix ){
    this.graphStrategy = new graphStrategy(nodeFactory)
    this.nodeFactory = new nodeFactory()
  }

  addNode = (...args) =>{
    return this.graphStrategy.addNode(...args)
  };

  getNode = (...args) => {
    return this.graphStrategy.getNode(...args)
  }

  getAllNodes = () => {
    return this.graphStrategy.getAllNodes()
  }

  hasNode = (...args) => {
    return this.graphStrategy.hasNode(...args)
  }

  addEdge = (...args) => {
    return this.graphStrategy.addEdge(...args);
  }

  getEdge = (...args) => {
    return this.graphStrategy.getEdge(...args)
  }

  getAllEdges = () => {
    return this.graphStrategy.getAllEdges()
  }

  hasEdge = (...args) => {
    return this.graphStrategy.hasEdge(...args)
  }

}

export default Graph
