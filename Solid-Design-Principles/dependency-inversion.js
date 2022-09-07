/* const manageShapeInterface = (fn) => ({
  name: 'ManageShapeINterface',
  calculate() {
    return fn();
  }
});

const cube = (length) => {
  const proto = {
    name: 'Cube',
    area() {
      return Math.pow(length, 2);
    },
    volume() {
      return Math.pow(length, 3);
    }
  }

  
  const cubeVol = manageShapeInterface(proto.volume)
  const composite = Object.assign({}, cubeVol);
  console.log(composite)
  return Object.assign(Object.create(composite), { length })
}

const rect = (length) => {
  const proto = {
    name: 'Rect',
    area() {
      return Math.pow(length, 2);
    }
  }
  const rectArea = manageShapeInterface(proto.area);
  const composite = Object.assign({}, rectArea);
  return Object.assign(Object.create(composite), { length })
}

console.log(rect(5).calculate())
console.log(cube(5).calculate())
 */







function Stripe(name) {
  this.name = name;
  this.payStripe = function(amount) {
    console.log(`${this.name} paid $${amount}`)
  }
}

function Paypal() {
  this.payPaypal = function(name, amount) {
    console.log(`${name} paid $${amount}`)
  }
}

function StripeProcessor(name) {
  this.stripe = new Stripe(name);
  this.makePayment = function(amount) {
    this.stripe.payStripe(amount);
  }
}

function PaypalProcessor(name) {
  this.name = name
  this.paypal = new Paypal();
  this.makePayment = function(amount) {
    this.paypal.payPaypal(this.name, amount)
  }
}

function Store(paymentProcessor) {
  this.paymentProcessor = paymentProcessor 
  this.payment = function(amount) {
    this.paymentProcessor.makePayment(amount)
  }
}

const s1 = new Store(new StripeProcessor('john'));
const s2 = new Store(new PaypalProcessor('mary'));
s1.payment(100);
s2.payment(200)