class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const HoldingPointer = this.top;
            this.top = newNode;
            this.top.next = HoldingPointer;
        }
        this.length++;
        return this;

    }
    pop(){
        if(!this.top){
            return null
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        const HoldingPointer = this.top;
        this.top = HoldingPointer.next;
        this.length--;
        return this;
    }
    isEmpty(){
        if(this.top === null && this.bottom === null){
            return true
        } else {
            return false
        }
    }
}

const myStack = new Stack();
myStack.push('google')
myStack.push('facebook')
myStack.push('twitter')
myStack.push('udemy')
myStack.push('youtube')
myStack.push('github')
myStack.pop()
myStack.pop()
console.log(myStack.isEmpty())