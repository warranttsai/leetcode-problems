"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function countNodes(root) {
    if (!root)
        return 0;
    else {
        var leftHeight = 0, rightHeight = 0;
        var currentNode = root;
        while (currentNode.left) {
            currentNode = currentNode.left;
            leftHeight += 1;
        }
        currentNode = root;
        while (currentNode.right) {
            currentNode = currentNode.right;
            rightHeight += 1;
        }
        if (leftHeight === rightHeight)
            return Math.pow(2, leftHeight) - 1;
        else
            return 1 + countNodes(root.left) + countNodes(root.right);
    }
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = countNodes(item);
    console.log(result);
}
