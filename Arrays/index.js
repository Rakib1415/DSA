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


// class MyArray {
//     constructor(){
//         this.length = 0;
//         this.data = {};
//     }
//     push(item){ // TC : O(1)
//         this.data[this.length] = item;
//         this.length++;
//         return this.length
//     }
//     pop(){ // TC : O(1)
//         const lastItem = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastItem;
//     }
//     get(index){ // TC : O(1)
//         return this.data[index];
//     }
//     delete(index){ // TC : O(n)
//         const item = this.data[index];
//         this.shiftItems(index);
//         return item;
//     }
//     shiftItems(index){ // TC : O(n)
//         for(let i = index; i < this.length - 1; i++){
//             this.data[i] = this.data[i+1];
//         }
//         delete this.data[this.length - 1];
//         this.length--;
//     }
// };

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

// const newArray = new MyArray();
// newArray.push(1);
// newArray.push(2);
// newArray.push(3);
// newArray.push(4);
// console.log(newArray);


// function reverse(str){
//     const stringArr = str.split(' ');
//     let reverseString = '';
//     for(let i = stringArr.length - 1; i >= 0; i--){
//         let word = stringArr[i];
//         for(let j = word.length - 1; j >= 0; j--){
//            reverseString += word.at(j) 
//         }
//         reverseString += ' ';
//     }
//     return reverseString;
// }

// function reverse(str){
//     let reverseString = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         reverseString += str.at(i);
//     }
//     return reverseString;
// }

// function reverse(str){
//     const backwords = [];
//     for(let i = str.length - 1; i >= 0; i--){
//         backwords.push(str[i]);
//     }
//     return backwords.join('');
// }

// const reverse = str => [...str].reverse().join('');

// console.log(reverse('i am a Rakib'));


function mergeSortedArrays(firstArr, secondArr){ // SC : O (n + m)   TC : O(n + m)
    const mergedArr = [];

    let i = 0, j = 0;
    while(i < firstArr.length && j < secondArr.length){
        if(firstArr[i] <= secondArr[j]){
            mergedArr.push(firstArr[i]);
            i++;
        }else{
            mergedArr.push(secondArr[j]);
            j++;
        }
    }
    if(i < firstArr.length){
        while(i < firstArr.length){
            mergedArr.push(firstArr[i]);
            i++;
        }
    }

      if(j < secondArr.length){
        while(j < secondArr.length){
            mergedArr.push(secondArr[j]);
            j++;
        }
    }

    return mergedArr;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))

// Array pros and cons

// fast lookup
// fast push or pop
// ordered

// slow inserts
// slow deletes
// fixed size (if use static array)