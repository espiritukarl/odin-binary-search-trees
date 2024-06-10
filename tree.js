import { Node } from "./node.js";
import { prettyPrint } from "./prettyPrint.js";

class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr)
    }

    buildTree(arr) {
        arr = arr = [...new Set(arr)].sort((a, b) => a - b)

        const midPoint = Math.floor(arr.length / 2)
        const middle = arr[midPoint]
        const left = arr.slice(0, midPoint);
        const right = arr.slice(midPoint + 1);

        if (arr.length === 0) return null
        const root = new Node(middle, this.buildTree(left), this.buildTree(right))
        return root
    }

    insert(value, node = this.root) {
        let insertNode = new Node(value)

        if (!this.root) {
            this.root = insertNode //if no root, insertNode is now the root
            return this.root
        }

        if (value < node.data) {
            if (!node.left) {
                node.left = insertNode
                return node.left
            }
            return this.insert(value, node.left)
        } else if (value > node.data) {
            if (!node.right) {
                node.right = insertNode
                return node.right
            }
            return this.insert(value, node.right)
        }
    }

    deleteItem(value, node = this.root) {
        if (!this.root) return node

        if (value < node.data) node.left = this.deleteItem(value, node.left)
        else if (value > node.data) node.right = this.deleteItem(value, node.right)
        else if (value === node.data) {
            if (!node.left && !node.right) return null // No children
            else if (node.left && !node.right) return node.left // Left-child only
            else if (!node.right && node.right) return node.right //Right-child only
            else { //Has both children
                const successor = this.minValueNode(node.right);
                node.data = successor.data; // Copy the inorder successor's content to this node
                node.right = this.deleteItem(successor.data, node.right); // Delete the inorder successor
            }
        }

        return node
    }

    minValueNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    find(value, node = this.root) {
        if (!this.root) return node

        if (value < node.data) {
            if (!node.left) return node.left
            return this.find(value, node.left)
        }
        else if (value > node.data) {
            if (!node.right) return node.right
            return this.find(value, node.right)
        }

        return node
    }

    levelOrder(callback) {
        if (!this.root) return []

        const queue = [this.root]
        const result = []

        while(queue.length > 0) {
            let currentNode = queue.shift()
            if (callback) callback(currentNode)
            else result.push(currentNode.data)
            
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }

        return result
    }

    inOrder(callback, node = this.root, result = []) {
        if (!node) return

        this.inOrder(callback, node.left, result)
        if (callback) callback(node)
        else result.push(node.data)
        this.inOrder(callback, node.right, result)
        
        return result
    }
    
    preOrder(callback, node = this.root, result = []) {
        if (!node) return

        if (callback) callback(node)
        else result.push(node.data)
        this.preOrder(callback, node.left, result)
        this.preOrder(callback, node.right, result)
        
        return result
    }

    postOrder(callback, node = this.root, result = []) {
        if (!node) return

        this.postOrder(callback, node.left, result)
        this.postOrder(callback, node.right, result)
        if (callback) callback(node)
        else result.push(node.data)
        
        return result
    }

    height(node) {
        if (!node) return -1

        const heightLeft = this.height(node.left)
        const heightRight = this.height(node.right)

        return Math.max(heightLeft, heightRight) + 1
    }

    depth(node) {
        if (!node) return -1

        const queue = [{ 
            node: this.root, 
            depth: 0 
        }];

        while (queue.length > 0) {
            let { 
                node: currentNode, 
                depth 
            } = queue.shift()
    
            if (currentNode === node) return depth

            if (currentNode.left) queue.push({ node: currentNode.left, depth: depth + 1 })
            if (currentNode.right) queue.push({ node: currentNode.right, depth: depth + 1 })
        }

        return -1
    }

    isBalanced(node = this.root) {
        if (!node) return true

        const heightLeft = this.height(node.left)
        const heightRight = this.height(node.right)

        if (Math.abs(heightLeft - heightRight) > 1) return false

        return this.isBalanced(node.left) && this.isBalanced(node.right)
    }

    rebalance(node = this.root) {
        if (this.isBalanced(node)) return

        this.root = this.buildTree(this.inOrder())
    }
}