import Node from '../Node';
import PriorityQueue from '../PriorityQueue'

class Graph{
  constructor( ){
    this.nodes = [];
    this.arcs  = {};
  }

  addNodesFromDataArray = ( nodes ) =>{
    for (var i = 0; i < nodes.length; i++) {
      this.addNode(new Node(nodes[i]) );
    }
  }

  addNodesFromArray = ( nodes )=>{
    for (var i = 0; i < nodes.length; i++) {
      this.addNode( nodes[i] );
    }
  }

  addUndirectedArcs = ( arcs ) =>{
    for ( var i = 0 ; i < arcs.length ; i++ ){
      this.addUndirectedArc( arcs[i].start , arcs[i].end , arcs[i].value );
    }
  }

  addNode = ( node ) =>{
    if( node instanceof Node ){
      this.nodes.push({ key: this.nodes.length , node:node});
    }else{
      console.error("Error: passed object is not a Node");
    }
  }

  addUndirectedArc = ( start , end , value=1 ) => {
    const { nodes } = this;
    if( nodes[start] !== undefined && nodes[end] !== undefined ){
      this.addDirectedArc( start , end , value );
      this.addDirectedArc( end , start , value );
    }
  }

  addDirectedArcs = ( arcs ) =>{
    for ( var i = 0 ; i < arcs.length ; i++ ){
      this.addDirectedArc( arcs[i].start , arcs[i].end , arcs[i].value );
    }
  }

  addDirectedArc = ( start , end , value=1 ) =>{
    const { nodes } = this;
    if( nodes[start] !== undefined && nodes[end] !== undefined ){
      if( this.arcs[start] === undefined ){
          this.arcs[start] = {};
      }
      this.arcs[start][end] ={cost: value}
      nodes[start].node.addNeighbor( nodes[end].node );
    }
  }

  checkIfPathExists = ( start , end ) => {
    const { nodes } = this;
    var hasPath = false
    if( nodes[start] !== undefined && nodes[end] !== undefined ){
      hasPath = this.bfs( start , end );
    }
    return hasPath
  }

  bfs = ( start , end ) =>{
    var currentNode = this.nodes[start].node
    var path = []
    var queue = []
    path.push( currentNode )
    queue.push( currentNode )
    while( queue.length !== 0 ){
      var node = queue.shift()
      var nbrs = node.neighbors
      for( var i = 0 ; i < nbrs.length ; i++ ){
        if( !path.includes( nbrs[i] ) ){
          path.push( nbrs[i] )
          queue.push( nbrs[i] )
        }
      }
    }
    return path.includes(this.nodes[end].node)
  }

  dijkstra = ( start , end ) =>{
    //TODO: implement
  }

  findPaths = ( start , end ) =>{
    let paths = [] //paths to be returned
    //TODO: implement
    //there is a path or has less than 3 paths
    //while( paths.lenght < 3 && this.checkIfPathExists( start , end ) ){
      //try dijkstra
      //take away intermediate nodes
    //}
    return paths
  }

}

export default Graph;
