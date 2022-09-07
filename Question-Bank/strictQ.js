/* //  You need to declare strict mode at the beginning of the program. If you declare strict mode below some code, it won't work.
console.log("some code");
// 'use strict' is ignored
// must be at the top
"use strict";
x = 21; // does not throw an error
 */


/* // Strict Mode in Function
myVariable = 9;
console.log(myVariable); 
function hello() {
    // applicable only for this function
    'use strict';
    string = 'hello'; 
}
hello();
 */


/* // Things Not Allowed in Strict Mode
'use strict';
a = 'hello'; // throws an error

'use strict';
person = {name: 'Carla', age: 25}; // throws an error

'use strict';
let person = {name: 'Carla'};
delete person; // throws an error

"use strict";
function hello(p1, p1) { console.log('hello')}; // throws an error
hello();

'use strict';
let obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
// assignment to a non-writable property
obj1.x = 9; // throws an error

'use strict';
let obj2 = { get x() { return 17; } };
// assignment to a getter-only property
obj2.x = 5; // throws an error

'use strict';
let obj2 = { get x() { return 17; } };
// assignment to a getter-only property
obj2.x = 5; // throws an error

// You cannot also use these reserved keywords in strict mode. (implements interface let package private protected public static yield eval arguments)
 */



// Sample Question
function counter() {
    "use strict"
    for(i=0; i<5; i++) {
        console.log(i)
    }
}
counter();