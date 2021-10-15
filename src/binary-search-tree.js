const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  node=null

  root() {
    return this.node
  }

  add(data) {   
      this.node=addToTree(this.node, data)

      function addToTree(node, data) {
        if(!node){
          return new Node(data)
        }
        if(node.data===data){
          return node
        } else {
          if(data<node.data) {
            node.left= addToTree(node.left, data)
          } else {
            node.right= addToTree(node.right, data)
        }
        return node
        }
      }
  }

  has(data) {
    return nodeHasElem(this.node,data)
    function nodeHasElem(node, data) {
      if(!node) {
        return false
      }
      if(node.data===data){
        return true
      } else{
        if(data<node.data) {
          return nodeHasElem(node.left, data)
        } else {
          return nodeHasElem(node.right, data)
        }
      }
    }
  }

  find(data) {
    return findElem(this.node,data)
    function findElem(node, data) {
      if(!node) {
        return null
      }
      if(node.data===data){
        return node
      } else{
        if(data<node.data) {
          return findElem(node.left, data)
        } else {
          return findElem(node.right, data)
        }
      }
    }
  }

  remove(data) {
    this.node = removeFromTree(this.node,data)

    function removeFromTree(node, data) {
      if(!node){
        return node
      } else {
        if(data<node.data) {
          node.left=removeFromTree(node.left, data)
          return node
        } 
        if(data>node.data) {
          node.right=removeFromTree(node.right, data)
          return node
        }
        if(data===node.data) {
          if(!node.left&&!node.right) {
            return null
          } else if(!node.left){
            node=node.right
            return node
          } else if(!node.right) {
            node=node.left
            return node
          } else {
            let rightNode=node.right
            while(rightNode.left){
              rightNode=rightNode.left
            }
            node.data=rightNode.data
            node.right=removeFromTree(node.right, rightNode.data)
            return node
          }
        }
      }
    }
  }

  min() {
    if(!this.node){
      return null
    }
    let checkNode=this.node
      while(checkNode.left) {
        checkNode=checkNode.left
      }
      return checkNode.data
  }

  max() {
    if(!this.node){
      return null
    }
    let checkNode=this.node
      while(checkNode.right) {
        checkNode=checkNode.right
      }
      return checkNode.data
  }

}
