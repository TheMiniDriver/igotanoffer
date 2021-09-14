
class Node {

  constructor() {
    this._leftNode = null; 
    this._rightNode = null;
    this.data = null; 
  }

  set leftNode(node) {
    this._leftNode = node; 
  }

  get leftNode() {
    return this._leftNode; 
  }

  set rightNode(node) {
    this._rightNode = node;
  }

  get rightNode() {
    return this._rightNode; 
  }

}

exports.Node = Node; 