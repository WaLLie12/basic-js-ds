const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addRecursive(this.rootNode, data);
  }

  addRecursive(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.addRecursive(node.left, data);
    } else if (data > node.data) {
      node.right = this.addRecursive(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.hasRecursive(this.rootNode, data);
  }

  hasRecursive(node, data) {
    if (node === null) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this.hasRecursive(node.left, data);
    } else {
      return this.hasRecursive(node.right, data);
    }
  }

  find(data) {
    return this.findRecursive(this.rootNode, data);
  }

  findRecursive(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.findRecursive(node.left, data);
    } else {
      return this.findRecursive(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeRecursive(this.rootNode, data);
  }

  removeRecursive(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.data = this.findMinValue(node.right);

      node.right = this.removeRecursive(node.right, node.data);
    } else if (data < node.data) {
      node.left = this.removeRecursive(node.left, data);
    } else {
      node.right = this.removeRecursive(node.right, data);
    }

    return node;
  }

  findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  min() {
    const minValueNode = this.findMinNode(this.rootNode);
    return minValueNode ? minValueNode.data : null;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max() {
    const maxValueNode = this.findMaxNode(this.rootNode);
    return maxValueNode ? maxValueNode.data : null;
  }

  findMaxNode(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree
};