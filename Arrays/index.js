const strings = ['a', 'b', 'c', 'd'];

// 4 * 4 bytes memory cost

// O(1)
// console.log(strings[2]);

// O(1)
strings.push('e');
// console.log(strings);

// O(1)
strings.pop();
strings.pop();

// console.log(strings);
// O(n)
strings.unshift('x');
// console.log(strings);

// O(n)
strings.splice(2, 0, 'alien');
// console.log(strings);

// class Player {
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     };
//     introduce(){
//         console.log(`I am a ${this.name} and i play ${this.type}`)
//     };
// };

// class Wizard extends Player{
//     constructor(name, type){
//         super(name, type)
//     };
//     play(){
//         console.log(`Weeee i am a ${this.type}`)
//     }
// };


// const wizard1 = new Wizard('Shelly', 'Healer');
// console.log(wizard1);


class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(item){ // TC : O(1)
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop(){ // TC : O(1)
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    get(index){ // TC : O(1)
        return this.data[index];
    }
    delete(index){ // TC : O(n)
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index){ // TC : O(n)
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
};

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('are');
// newArray.push('nice');
// newArray.push('!');
// newArray.pop();
// newArray.pop();
// newArray.delete(1);
// console.log(newArray);

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
console.log(newArray);