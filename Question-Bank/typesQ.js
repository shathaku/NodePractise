console.log(typeof (1));

console.log(typeof ('abc'));

console.log(typeof (true));

console.log(typeof (undefined));

console.log(typeof (null)); // strange

console.log(typeof ({ a: 10 }));

/*
// numeric string used with + gives string type
let result;

result = '3' + 2;
console.log(result) // "32"

result = '3' + true;
console.log(result); // "3true"

result = '3' + undefined;
console.log(result); // "3undefined"

result = '3' + null;
console.log(result); // "3null"

// numeric string used with - , / , * results number type

let result;

result = '4' - '2';
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2 */

/* // non-numeric string used with - , / , * results to NaN

let result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

result = 4 / 'hello';
console.log(result); // NaN

result = 4 - 'hello';
console.log(result); // NaN
 */

/*
// if boolean is used, true is 1, false is 0

let result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4
 */

/*
// null is 0 when used with number
let result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4
 */

/*
// Arithmetic operation of undefined with number, boolean or null gives NaN

let result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN
 */

// Using NaN & isNaN()

console.log(Number.isNaN(NaN));
console.log(isNaN(1));
console.log(isNaN('1'));
console.log(isNaN('A')); // bcoz of coersion
// alternative for isNaN()
const a = NaN;
console.log(a !== a);
const b = 1;
console.log(b !== b);
const c = 'A';
console.log(c !== c);

const str = 'Hello';
str[0] = 'HHH';
console.log(str); // string is immutable
str.toUpperCase();
console.log(str); // not "TEST"

const obj1 = {
  name: 'Alex',
};
const obj2 = {
  name: 'Alex',
};
console.log(obj1 === obj2);
