'use strict'

// program to print a text 
let a = "hello";
function greet() {
  console.log(a);
  a = 'hi';
  console.log(a);
}
greet();
console.log(a);



for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 2000);
}

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j)
    }, 2000);
  })(i)
}


