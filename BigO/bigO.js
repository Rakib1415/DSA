// O(1) Constant- no loops
// O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear- for loops, while loops through n items
// O(n log(n)) Log Liniear- usually sorting operations
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
// nested loops
// O(2^n) Exponential- recursive algorithms that solves a problem of size N
// O(n!) Factorial- you are adding a loop for every element

const nemos = ['nemos', 'jupiter'];

const findNemo = (nemos) => {   //TC: O(n)
    for(let i = 0; i < nemos.length; i++){
        if(nemos[i] === 'nemos'){
            console.log('Find Nemos!');
        }
    }
}

findNemo(nemos);

const printFirstElement = (array) => { // TC : O(1)
    console.log(array[0]);
};

const nums = new Array(100).fill(12);
printFirstElement(nums);

// which code is best code?
// There are three pilars.
// -- Readable
// -- Space complexity (Memory)
// -- Time complexity (Time)

// Space complexity
// what cause space complexity?
// -- variables
// -- data structure
// -- function calls
// -- allocations

function foo(n){  // SC : O(1) and TC : O(n)
    for(let i = 0; i < n.length; i++){
        console.log('Foo!');
    }
};

foo([1,2,3,4,5]);

function arrayOfHiNTimes(n){  // SC : O(n) and TC : O(n)
    let hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    return hiArray;
};

const hiArray = arrayOfHiNTimes(4);
console.log(hiArray);

//What are company looking for ?
// there are four skills
// -- Analytic skills
// -- coding skills
// -- technical skills
// -- communication skills

// Data structures
// 1. Arrays
// 2. Stacks
// 3. Queues
// 4. Linked Lists
// 5. Trees
// 6. Tries
// 7. Graphs 
// 8. Hash Tables 

// Algorithms
// 1. Sorting
// 2. Dynamic Programmings
// 3. BFS + DFS (Searching)
// 4. Recursion



// const containCommonItem = (arr1, arr2) => { //TC: O(a * b) SC : O(1)
//    for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//         if(arr1[i] === arr2[j]){
//             return true;
//         }
//     }
//    }
//    return false;
// }

// step 1 : first array convert to object that likes obj {
    // a : true,
    // b : true
// }
// step 2 : then check the item is contain second array item = obj.property
// step 3 : return true or false


function containCommonItem2(arr1, arr2){ // TC : O(a + b) SC: O(a)
    const map = {};
    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            map[arr1[i]] = true;
        }
    }
    for(let j = 0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 't', 'y'];

// more readable and language specific better in javascript
function containCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}

console.log(containCommonItem2(array1, array2));


function hasPairWithSum(arr, sum){ // TC : O(n^2) SC : O(1)
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length ; j++){
            if(arr[i] + arr[j] === sum){
                return true;
            }
        }
    }
    return false;
}

console.log(hasPairWithSum([1,2,3,4,5], 4))

function hasPairWithSum1(arr, sum){  // TC : O(n) SC : O(n)
    const mySet = new Set();
    for(let i = 0; i < arr.length; i++){
        if(mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum - arr[i]);
    };
    return false;
}
console.log(hasPairWithSum1([1,2,3,4,5], 4))

