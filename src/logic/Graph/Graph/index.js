import Node from '../Node';

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
    }
  }

}

export default Graph;
