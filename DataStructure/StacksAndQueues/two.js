class Stack{
    constructor(){
        this.array = [];
    }

    push(value){
        this.array.push(value)
        return this.array;
    }
    peek(){
        return this.array[this.array.length-1];
    }
    pop(){
        this.array.pop()
        return this.array
    }
    isEmpty(){
        if(this.array[0]){
            return false;
        } else {
            return true;
        }
    }
}

const myStack = new Stack();
console.log(myStack.push(1))
console.log(myStack.push(2))
console.log(myStack.push(3))
console.log(myStack.push(4))
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.isEmpty())

