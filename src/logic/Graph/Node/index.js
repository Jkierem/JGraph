class Node {
  constructor( data={} ) {
    this.data = data;
    this.neighbors = [];
  }

  addNeighbor = ( node ) =>{
    if( node instanceof Node ){
      this.neighbors.push(node);
    }else{
      console.error("Error: passed object is not a Node");
    }
  }
}

export default Node ;

export const nodeComparator = (a,b) => { return a.node.data.numValue - b.node.data.numValue }
