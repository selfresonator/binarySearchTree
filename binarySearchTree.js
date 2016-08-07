var BinarySearchTree = function(value){
  var binarySearchTree = Object.create(binarySearchTreePrototype);
  binarySearchTree.value = value;
  binarySearchTree.right = {};
  binarySearchTree.left = {};
  return binarySearchTree;
};

var binarySearchTreePrototype = {};

binarySearchTreePrototype.insert = function (value) {

};
