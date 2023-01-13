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

strings.splice(2, 0, 'alien');
console.log(strings);