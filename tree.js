import { Node } from "./node.js";

class Tree {
    constructor(arr) {
        this.sortedArr = [...new Set(arr)].sort((a, b) => a - b)
        this.root = this.buildTree(this.sortedArr)
    }

    buildTree(arr) {
        const midPoint = Math.floor(arr.length / 2)
        const middle = arr[midPoint]
        const left = arr.slice(0, midPoint);
        const right = arr.slice(midPoint + 1);

        if (arr.length === 0) return null
        const root = new Node(middle, this.buildTree(left), this.buildTree(right))
        return root
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}

const newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
console.log(newTree.prettyPrint(newTree.root))