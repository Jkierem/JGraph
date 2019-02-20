import {
  NamedVertexFactory as NodeFactory ,
  UndirectedBooleanAdjacencyMatrix as Strategy,
  BooleanAdjacencyMatrix,
  Graph
} from '../Graph'

const g = new Graph(NodeFactory,Strategy)
const nf = new NodeFactory()
g.addNode( nf.create("colombia") )
g.addNode( nf.create("brazil") )
g.addNode( nf.create("bolivia") )
g.addNode( nf.create("bolivia") )

console.log( g.getAllNodes() )

g.addEdge( "colombia" , "brazil"  , 5  )
g.addEdge( "colombia" , "bolivia" , 25 )

console.log( g.getAllEdges() )
console.log( g.getNeighbors("colombia") )
console.log( g.getNeighbors("brazil") )
console.log( Strategy.prototype instanceof BooleanAdjacencyMatrix )
