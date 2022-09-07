
  function sum() {
      let a = 10;
      function increaseSum(num) {
          a = a + num;
          return a;
      }
      return increaseSum;
  }

  const ret = sum();
  console.log(ret(1));
  console.log(ret(2)); 
  console.log(ret(5)); 
  console.log(ret(7));

 




/* function sum() {
    let a = 0;
    function increaseSum() {
        // the value of a is increased by 1
        a = a + 1;
        console.log(a)
        return a;
    }
    return increaseSum;
}

let x = sum();
//let a = 5;
console.log(x()); // 1
console.log(x()); // 2
//console.log(a); // 5 */



var func = [];
for(var i=0; i<5; i++) {
    let val = i;
    func[val] = function() {
        console.log(val)
    }
}
func[0]()
func[1]()
func[2]()
func[3]()
func[4]()


/* function sum(x,y) {
    if(y) return x+y;
    return function(y) {
        return x+y;
    }
}
console.log(sum(6,7))
console.log(sum(6)(7)) */