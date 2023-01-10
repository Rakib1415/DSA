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