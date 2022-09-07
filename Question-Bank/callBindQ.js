const alpha = {
    a: 10,
    print: fucntion() {
        console.log(this.a);
        return fucntion() {
            console.log(this.a)
        }
    }
}

const test = () => {

}

const beta = alpha.print();
beta()
// const gamma = {
//     a: 20
// }
// beta.call(gamma);


// const alpha1 = {
//     a: 10,
//     print: function() {
//         console.log(this.a);
//         return () => {
//             console.log(this.a)
//         }
//     }
// }

// const beta1 = alpha1.print();
// beta1();




/* function person() {
    this.name = "John";
    this.greet = function() {
        console.log(this.name)
        function sayHello() {
            console.log(this)
            this.hello = "hi"
        }
        sayHello.call(this);
        console.log(this.hello)
    }
}

const p1 = new person();
p1.greet(); */



function person() {
    this.name = "John";
    this.greet = function() {
        console.log(this.name)
        const sayHello = function() {
            console.log(this.name)
            this.hello = "hi"
        }
        return sayHello;
        //console.log(this.name)
    }
}

const p1 = new person();
const h = p1.greet();
h.call(p1)


