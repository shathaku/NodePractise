function *fibonacci(){
  let curr = 0;
  let next = 1;
  while(true) {
    let ret = yield curr;
    [curr, next] = [next, curr+next];
    if(ret) {
      curr = 0;
      next = 1;
    }
  }
}

let fib = fibonacci();
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next(true).value)
console.log(fib.next().value)



const alpha = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    [Symbol.iterator]: function *() {
        for(let k in this) {
            yield this[k]
        }
    }
}

for(let v of alpha) {
    console.log(v)
}