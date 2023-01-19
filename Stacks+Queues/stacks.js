
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(value){ // TC : O(1)
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
            return;
        }
        this.top.next = newNode;
        this.top = newNode;
        this.length++;
    }
    peek(){ // TC : O(1)
        if(this.length === 0){
            console.log("Stack is empty!");
            return;
        }
        return this.top.value;
    }
    pop(){ // TC : O(n)
        if(this.length <= 0){
            console.log("Stack is empty!");
            return;
        }else if(this.length === 1){
            this.top = null;
            this.bottom = null;
            this.length--;
            return;
        }else{
            let currentNode = this.bottom;
            while(currentNode.next.next !== null){
            currentNode = currentNode.next;
        }
            currentNode.next = null;
            this.top = currentNode;
            this.length--;
        }
    }
    isEmpty(){ // TC : O(1)
        if(this.length === 0){
            return true;
        }
        return false;
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(5);
myStack.push(100);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack.isEmpty());
