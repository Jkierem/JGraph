import { TreeNodeFactory } from "../NodeFactory";
import { call } from "../Utils";

class Tree {
    constructor(root, nodeFactory = TreeNodeFactory) {
        this.root = root;
        this.nodeFactory = nodeFactory;
    }

    getNextLevel = () => {
        return this.root.children
    }

    getLevel = (depth) => {
        if (depth == 0) {
            return this.root
        } else if (depth == 1) {
            return this.getNextLevel()
        } else {
            return this.root.getChildren()
                .map(x => new Tree(x))
                .flatMap(call("getLevel", depth - 1))
        }
    }

    addPath = (path, delimiter = "/") => {
        const data = `${path}`.split(delimiter).map(x => this.nodeFactory.create({ key: x }))
        if (this.root == undefined) {
            this.root = data[0];
        }
        let masterNode = this.root;
        for (let i = 0; i < data.length; i++) {
            const node = data[i]
            if (!this.nodeFactory.equals(node, masterNode)) {
                let child = masterNode.getChildren().find(x => this.nodeFactory.equals(x, node))
                if (!child) {
                    this.nodeFactory.link(masterNode, node)
                    child = node;
                }
                masterNode = child;
            }
        }
    }
}

export default Tree;