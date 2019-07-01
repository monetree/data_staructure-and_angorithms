// 1-->10-->5-->16


// let myLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 10,
//             next: {
//                 value: 16,
//                 next: {
//                     value: 83,
//                     next: null
//                 }
//             } 
//         }
//     }
// }



class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode =  {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    } //O(1)

    prepend(value) {
        const newNode =  {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++;
        return this
    } //O(1)

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    } 

    insert(index, value){
        if (index >= this.length){
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
        return this
    } //O(n)

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next
            counter ++ 
        }
        return currentNode
    }

    remove(index){
        const leader = this.traverseToIndex(index-1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this
    } //O(n)

    reverse(){
        if(!this.head.next){
            return this.head
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    } // O(n)
}

myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(3, 23)
myLinkedList.insert(20, 83)
myLinkedList.remove(2)
myLinkedList.remove(2)
myLinkedList.reverse()
// console.log(myLinkedList.printList())
// console.log(myLinkedList)

