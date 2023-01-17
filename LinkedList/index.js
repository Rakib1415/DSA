// 1 -> 10 -> 5 -> 16

// Singly linked list
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
    append(value){ // TC: O(1)
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;

    }
    prepend(value){ // TC : O(1)
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){ // TC : O(n)
        if(index >= this.length){
            return this.append(value);
        }
       const newNode = new Node(value);
       const leader = this.traverseToIndex(index -1);
       const flower = leader.next;
       leader.next = newNode;
       newNode.next = flower;
       this.length++;
       return this.printList();

    }

    traverseToIndex(index){ // TC : O(n)
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
    remove(index){ // TC : O(n)
        if(index < 0 || index > this.length){
            return;
        }
        const leader = this.traverseToIndex(index -1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        
    }
};

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(200, 100);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList.printList())

// Doubly linked list

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        }
        this.tail = this.head;
        this.length = 1;
    }
      append(value){ // TC: O(1)
        const newNode = new Node(value);
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;

    }
    prepend(value){ // TC : O(1)
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
        insert(index, value){ // TC : O(n)
        if(index >= this.length){
            return this.append(value);
        }
       const newNode = new Node(value);
       const leader = this.traverseToIndex(index -1);
       const flower = leader.next;
       leader.next = newNode;
       newNode.prev = leader;
       newNode.next = flower;
       flower.prev = newNode;
       newNode.next = flower;
       this.length++;
       return this.printList();

    }
        traverseToIndex(index){ // TC : O(n)
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
        remove(index){ // TC : O(n)
        if(index < 0 || index > this.length){
            return;
        }
        const leader = this.traverseToIndex(index -1);
        const unwantedNode = leader.next;
        unwantedNode.next.prev = leader;
        leader.next = unwantedNode.next;
        this.length--;
        
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
}


const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(3);
myLinkedList.append(2);
myLinkedList.prepend(1);
myLinkedList.prepend(70);
myLinkedList.insert(2, 99);
myLinkedList.remove(1);
console.log(myLinkedList.printList());