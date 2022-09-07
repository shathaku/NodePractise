// Rest operator

/* let func = function(...args) {
    console.log(args);
}
func(3); // [3]
func(4, 5, 6); // [4, 5, 6]
 */


/* let func = function(num1,...args) {
    console.log(num1)
    console.log(args);
}
func(3);
func(4, 5, 6); // [4, 5, 6]
 */

function func(num1,num2,...xyz) {
    console.log(xyz)
    //console.log(args);
}

func(4, 5, 6, 7,8,9,10); // [4, 5, 6]




// Spread operator

/* const arrValue = ['My', 'name', 'is', 'Jack'];
console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack
 */

// Copy & clone an array
/* let arr1 = [ 1, 2, 3];
let arr2 = arr1;
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
// append an item to the array
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
 */

let arr1 = [ 1, 2, 3];
let arr2 = [ 1, 2, 3];
// copy using spread syntax
let arr3 = [...arr1, ...arr2];
console.log(arr1); // [1, 2, 3]
console.log(arr3); // [1, 2, 3]
// append an item to the array
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3]




// Sample question (palindrome string)
let str = "ASDFG";
let result = [...str].reverse().join("");
console.log(result)