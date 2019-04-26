import AbstractGraphStrategy from '../AbstractGraphStrategy'
import { prop , isDefined , keysOf } from '../../Utils'

class AdjacencyList extends AbstractGraphStrategy {
  constructor(nodeFactory){
    super(nodeFactory)
  }

  addNode(node){
    if( !this.findNode(node) && !this.hasNode( this.nodeFactory.getKey(node) ) ){
      this.nodes = [...this.nodes , {node , neighbors:{} }]
    }
  }

  getArrayObject(key){ return this.nodes.find( ({ node:x }) => this.nodeFactory.getKey(x) === key ) }
  getNode(key){ this.getArrayObject(key)?.node }
  findNode(node){ return this.nodes.find( ({ node:x }) => this.nodeFactory.compare(x,node) === 0 )?.node }
  getAllNodes(){ return this.nodes.map(prop("node")) }
  hasNode(key){ return !!this.getNode(key) }

  addEdge(a,b,value){
    const obj = this.getArrayObject(a);
    if( obj ){
      obj.neighbors[b] = value
    }
  }

  getEdge(a,b){
    return this.getNode(a)?.neighbors[b]
  }

  getAllEdges(){
    return this.nodes.flatMap( ({ node , neighbors }) => {
      return keysOf(neighbors).map( (neigh) => {
        return {
          start: this.nodeFactory.getKey(node),
          end: neigh,
          value: neighbors[neigh]
        }
      })
    })
  }

  hasEdge(a,b){
    return isDefined(this.getEdge(a,b))
  }

  getNeighbors(key){
    const neighbors = this.nodes.find( ({ node }) => this.nodeFactory.getKey(node) === key )?.neighbors
    return keysOf(neighbors)
  }
}

export default AdjacencyList
