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