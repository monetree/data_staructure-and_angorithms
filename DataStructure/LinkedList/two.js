// 1-->10-->5-->16


// let myLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 10,
//             next: {
//                 value: 5,
//                 next: {
//                     value: 16,
//                     next: null
//                 }
//             } 
//         }
//     }
// }


class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      newNode.prev = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } //O(1)

    prepend(value) {
        const newNode =  {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
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
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
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
        const afterNode = leader.next.next;
        afterNode.prev = leader
        leader.next = afterNode.next;
        this.length--;
        return this
    } //O(n)
}

myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(3, 23)
// myLinkedList.insert(20, 83)
// myLinkedList.remove(2)
// // myLinkedList.remove(2)
// console.log(myLinkedList.printList())
// console.log(myLinkedList)

