import AbstractNodeFactory from "./AbstractNodeFactory";
import { reverse } from "../Utils";

class TreeNodeFactory extends AbstractNodeFactory {
    constructor() {
        super();
    }

    static create(data = {}) {
        let {
            key = "",
            value = null,
            children = [],
            parent = null,
        } = data;

        return {
            key,
            value,
            children,
            parent,
            getKey() {
                return this.key
            },
            getValue() {
                return this.value
            },
            getChildren() {
                return this.children;
            },
            addChild(node) {
                this.children = [...this.children, node]
            },
            isRoot() {
                return this.parent == null
            },
            setParent(_parent) {
                this.parent = _parent;
            },
            getRootPath(current = []) {
                const newPath = [...current, this]
                if (this.isRoot()) {
                    return reverse(newPath)
                } else {
                    return this.parent.getRootPath(newPath)
                }
            }
        }
    }

    static compare(a, b) {
        return a.getKey().localeCompare(b.getKey());
    }

    static getKey(node) {
        return node.getKey()
    }
    static equals(a, b) {
        return TreeNodeFactory.compare(a, b) == 0
    }

    static link(parent, child) {
        parent.addChild(child)
        child.setParent(parent)
    }
}

export default TreeNodeFactory;