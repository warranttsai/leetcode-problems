/**
 * This question is applying the TreeNode class and iteration.
 * Please use LeetCode website for test cases.
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  else {
    let leftHeight = 1,
      rightHeight = 1;

    let currentNode = root;
    while (currentNode.left) {
      currentNode = currentNode.left;
      leftHeight += 1;
    }
    currentNode = root;
    while (currentNode.right) {
      currentNode = currentNode.right;
      rightHeight += 1;
    }

    if (leftHeight === rightHeight) return 2 ** leftHeight - 1;
    else return 1 + countNodes(root.left) + countNodes(root.right);
  }
}
