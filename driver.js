import { prettyPrint } from "./prettyPrint.js";
import { Tree } from "./tree.js";

function generateRandomNumbersArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }

  const randomNumbersArray = generateRandomNumbersArray(20);
  const bst = new Tree(randomNumbersArray);
  
  console.log("Is the tree balanced?");
  console.log(bst.isBalanced());
  
  console.log("Tree structure before unbalancing:");
  prettyPrint(bst.root);
  
  console.log("Level Order Traversal:");
  bst.levelOrder((node) => console.log(node.data));
  console.log("Pre Order Traversal:");
  bst.preOrder((node) => console.log(node.data));
  console.log("Post Order Traversal:");
  bst.postOrder((node) => console.log(node.data));
  console.log("In Order Traversal:");
  bst.inOrder((node) => console.log(node.data));
  
  bst.insert(101);
  bst.insert(102);
  bst.insert(103);

  console.log("Tree structure after unbalancing:");
  prettyPrint(bst.root);
  
  console.log("Is the tree unbalanced?");
  console.log(bst.isBalanced());
  
  bst.rebalance();
  
  console.log("Tree structure after rebalancing:");
  prettyPrint(bst.root);

  console.log("Is the tree balanced after rebalancing?");
  console.log(bst.isBalanced());
  
  console.log("Level Order Traversal after rebalancing:");
  bst.levelOrder((node) => console.log(node.data));
  console.log("Pre Order Traversal after rebalancing:");
  bst.preOrder((node) => console.log(node.data));
  console.log("Post Order Traversal after rebalancing:");
  bst.postOrder((node) => console.log(node.data));
  console.log("In Order Traversal after rebalancing:");
  bst.inOrder((node) => console.log(node.data));