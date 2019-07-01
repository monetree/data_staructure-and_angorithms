class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    peek(){
        return this.first;
    }

    dequeue(){
        if(!this.first){
            return null
        }
        if(this.first === this.last){
            this.last = null;
        }
        const holdingPointer = this.first.next;
        this.first = holdingPointer;
        this.length--;
        return this;
    }

    isEmpty(){
        if(this.length === 0){
            return true;
        }
        return false;
    }
}

const myQueue = new Queue();
myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.enqueue('c')
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.isEmpty()