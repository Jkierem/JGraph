import { prop } from '../Utils'
const priority = prop("priority")

const DefaultSorter = (a,b) => priority(a) - priority(b)

class PriorityQueue{
  constructor( nodes=[] , sorter=DefaultSorter ){
    this._nodes = nodes
    this._sorter = sorter
  }

  enqueue = (obj) => {
    this._nodes = [ this._nodes , obj ].sort(this._sorter)
  }

  dequeue = () => {
    const el = this._nodes.slice(-1)
    this._nodes = this._nodes.slice(0,this._nodes.length - 1)
    return el
  }

  isEmpty = () => {
    return !this._nodes.length;
  };
}

export default PriorityQueue
