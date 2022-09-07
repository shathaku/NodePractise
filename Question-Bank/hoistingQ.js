// program to display value
/* let a;
console.log(a);
a = 5; // 5 */

/* // program to display value
b = 5;
console.log(b);
let b; // error
 */



// program to display value
console.log(a);
var a = 5;
//behaves like
var b;
console.log(b);
b = 5;

// program to display value
console.log(c);
let c = 5;




// Function hoisting

// program to print the text
greet1();

function greet1() {
    console.log('Hi, there.');
}


// program to print the text
greet2();

let greet2 = function() {
    console.log('Hi, there.');
}