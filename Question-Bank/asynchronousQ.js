// are callbacks asynchronous

/* function doAsyncTask(cb) {
    //setTimeout(cb, 1000);
    cb();
}

doAsyncTask(() => console.log(message));

let message = "Callback Called" */


// Immediately invoke Promise
function doAsyncTask() {
  return Promise.resolve()
}

doAsyncTask().then(() => console.log(message))

let message = 'Promise Called';




/* const wait = time => new Promise(
    res => setTimeout(() => res(), time)
  );
  
  wait(200)
    // onFulfilled() can return a new promise, `x`
    .then(() => new Promise(res => res('foo')))
    // the next promise will assume the state of `x`
    .then(a => a)
    // Above we returned the unwrapped value of `x`
    // so `.then()` above returns a fulfilled promise
    // with that value:
    .then(b => console.log(b)) // 'foo'
    // Note that `null` is a valid promise value:
    .then(() => null)
    .then(c => console.log(c)) // null
    // The following error is not reported yet:
    .then(() => {throw new Error('foo');})
    // Instead, the returned promise is rejected
    // with the error as the reason:
    .then(
      // Nothing is logged here due to the error above:
      d => console.log(`d: ${ d }`),
      // Now we handle the error (rejection reason)
      e => console.log(e)) // [Error: foo]
    // With the previous exception handled, we can continue:
    .then(f => console.log(`f: ${ f }`)) // f: undefined
    // The following doesn't log. e was already handled,
    // so this handler doesn't get called:
    .catch(e => console.log(e))
    .then(() => { throw new Error('bar'); })
    // When a promise is rejected, success handlers get skipped.
    // Nothing logs here because of the 'bar' exception:
    .then(g => console.log(`g: ${ g }`))
    .catch(h => console.log(h)) // [Error: bar]

 */

// Sample
const wait = (time) => new Promise(res => setTimeout(() => res(), time));
wait(200)
  .then(() => new Promise(res => res('foo')))
  .then(a => a)
  .then(b => console.log(b))
  .then(() => null)
  .then(c => console.log(c))
  .then(() => { throw new Error('foo'); })
  .then(
    d => console.log(`d: ${d}`),
    e => console.log(e))
  //e => {throw new Error('moo');})
  .then(f => console.log(`f: ${f}`))
  .catch(e => console.log(e))
  .then(() => { throw new Error('bar'); })
  .then(g => console.log(`g: ${g}`))
  .catch(h => console.log(h))



  const p1 = new Promise((resolve, reject) => {
    try {
      for() {
        ///10 sec
      }
      resolve("hello")
    } catch (error) {
      reject(error)
    }
  })
//Date.now()
  p1.then((val) => {
    Date.now();
    console.log(val)
  }).catch(err => console.log(err))
//////////////////////////////////////


  const test = (function(a) {
    console.log(a)
  })(10)

setTimeout(fucntion() {
  //body
}, 1000)








