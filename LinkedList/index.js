// 1 -> 10 -> 5 -> 16

// create Node class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// create linked list class
class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;

    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){
       const newNode = new Node(value);
       const leader = this.traverseToIndex(index -1);
       const holdingPointer = leader.next;
       leader.next = newNode;
       newNode.next = holdingPointer;
       this.length++;
       return this.printList();

    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
};

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());