class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);    
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;    
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                // left
                if(value === currentNode.value){
                    return currentNode
                } 
                currentNode = currentNode.left;
            } else {
                //right
                if(value === currentNode.value){
                    return currentNode
                } 
                currentNode = currentNode.right;
            }
        }
        // while(currentNode){
        //     if(value < currentNode.value){
        //         currentNode = currentNode.left;
        //     } else if (value > currentNode.value){
        //         currentNode = currentNode.right;
        //     } else if (value === currentNode.value){
        //         return currentNode;
        //     }
        // }
        return false;
    }


    
    remove(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
                //go left and search
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                //go right and search
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                //matched
                if(!currentNode.right){
                    //no right child
                    if(!parentNode){
                        this.root = currentNode.left;
                    } else {
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        } else {
                            parentNode.right = currentNode.left;
                        }
                    }

                } else if(!currentNode.right.left){
                    //no left child of right child
                    currentNode.right.left = currentNode.left;
                    if(!parentNode){
                        this.root = currentNode.right; 
                    } else{
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right
                        } else {
                            parentNode.right = currentNode.right;
                        }
                    } 

                } else {
                    // right child has left child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;
                    if(!parentNode){
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value){
                            parentNode.left = leftmost;
                        } else {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
}



const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(5);
tree.insert(3)  
tree.insert(7) 
tree.insert(6)
tree.insert(8)   
tree.insert(4)  
tree.insert(20)
tree.insert(99)
tree.insert(15)
tree.insert(1)  
tree.lookup(20)
tree.remove(5)

console.log(JSON.stringify(traverse(tree.root)))


//       9
//   4       20
// 1   6  15  170



function traverse(node){
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree
}