# Binary Search Tree

This project implements a binary search tree in JavaScript from The Odin Project.

## Features

- **Node Class**: Implements a Node class with attributes for data, left child, and right child.
- **Tree Class**: Implements a Tree class with the following methods:
  - `buildTree(array)`: Builds a balanced binary search tree from an array of data.
  - `insert(value)`: Inserts a node with the given value into the tree.
  - `deleteItem(value)`: Deletes the node with the given value from the tree.
  - `find(value)`: Finds and returns the node with the given value.
  - `levelOrder(callback)`: Traverses the tree in breadth-first level order and applies a callback function to each node.
  - `inOrder(callback)`: Traverses the tree in in-order depth-first order and applies a callback function to each node.
  - `preOrder(callback)`: Traverses the tree in pre-order depth-first order and applies a callback function to each node.
  - `postOrder(callback)`: Traverses the tree in post-order depth-first order and applies a callback function to each node.
  - `height(node)`: Returns the height of the given node.
  - `depth(node)`: Returns the depth of the given node.
  - `isBalanced()`: Checks if the tree is balanced.
  - `rebalance()`: Rebalances the tree if it is unbalanced.
- **Pretty Print Function**: Includes a function for visualizing the binary search tree.
- **Driver Script**: A driver script that demonstrates the functionality of the binary search tree implementation by creating, manipulating, and analyzing binary search trees.
