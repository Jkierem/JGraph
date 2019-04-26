import {
  NamedVertexFactory as NodeFactory,
  UndirectedAdjacencyList as Strategy,
  Graph,
  Tree
} from '../Structures'
import { prop } from '../Structures/Utils';

const g = new Graph(NodeFactory, Strategy)
const nf = NodeFactory
g.addNode(nf.create("colombia"))
g.addNode(nf.create("brazil"))
g.addNode(nf.create("bolivia"))
g.addNode(nf.create("bolivia"))

console.log(g.getAllNodes())

g.addEdge("colombia", "brazil", 5)
g.addEdge("colombia", "bolivia", 25)

console.log(g.getAllEdges())
console.log(g.getNeighbors("colombia"))
console.log(g.getNeighbors("brazil"))

const t = new Tree();
t.addPath("a/b/c/d")
t.addPath("a/x/z");
t.addPath("a/b/e");
t.addPath("h/u")

console.log(t);
console.log("root: ", t.getLevel(0))
console.log("level 1:", t.getLevel(1))
console.log("level 2:", t.getLevel(2))
console.log("level 3:", t.getLevel(3))
console.log(t.getLevel(3)[0].getRootPath().map(prop("key")))
console.log(t.getLevel(2)[2].getRootPath().map(prop("key")))