import { abstractMethodError } from '../Utils'

class AbstractGraphStrategy {
  constructor(nodeFactory){
    this.nodeFactory = nodeFactory
    this.nodes = []
  }

  addNode(node){
    if( !this.findNode(node) && !this.hasNode( this.nodeFactory.getKey(node) ) ){
      this.nodes = [...this.nodes , node]
    }
  }
  getNode(key){ return this.nodes.find( x => this.nodeFactory.getKey(x) === key ) }
  findNode(node){ return this.nodes.find( x => this.nodeFactory.compare(x,node) === 0 )}
  getAllNodes(){ return this.nodes }
  hasNode(key){ return !!this.getNode(key) }

  addEdge(){ abstractMethodError("GraphStrategy.addEdge") }
  getEdge(){ abstractMethodError("GraphStrategy.getEdge") }
  getAllEdges(){ abstractMethodError("GraphStrategy.getAllEdges") }
  hasEdge(){ abstractMethodError("GraphStrategy.hasEdge") }

  getNeighbors(){ abstractMethodError("GraphStrategy.getNeighbors") }
}

export default AbstractGraphStrategy
