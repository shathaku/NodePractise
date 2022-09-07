/* console.log(this);
this.name = "John";
console.log(this) */



// Inside function
/* function greet() {
    console.log(this)
}
greet(); */

/* function person() {
    this.name = "John";
    this.greet = function() {
        console.log(this.name)
        function sayHello() {
            console.log(this.name)
        }
        sayHello()
    }
}

const p1 = new person();
const g = p1.greet(); */


/* function person() {
    this.name = "John";
    this.greet = function() {
        console.log(this.name)
    }
}

const p2 = new person();
const func1 = p2.greet;
func1() */


// Inside inner function
/* function person() {
    this.name = "John";
    this.greet = function() {
        console.log(this)
        function sayHello() {
            console.log(this)
            this.hello = "hi"
        }
        sayHello()
        //sayHello.call(this);
        console.log(this)
    }
}

const p1 = new person();
p1.greet(); */




// Using fat arrow function
function person() {
    this.name = "John";
    this.greet = function() {
        console.log(this.name)
        const sayHello = () => {
            console.log(this)
            this.hello = "hi"
        }
        sayHello();
        console.log(this)
    }
}

const p1 = new person();
p1.greet();