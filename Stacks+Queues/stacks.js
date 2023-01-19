
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
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        this.length++;
    }
    peek(){ // TC : O(1)
        if(this.length === 0){
            console.log("Stack is empty!");
            return;
        }
        return this.top;
    }
    pop(){ // TC : O(1)
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
    }
    isEmpty(){ // TC : O(1)
        if(this.top === null && this.bottom === null){
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
console.log(myStack.peek());
console.log(myStack.isEmpty());
