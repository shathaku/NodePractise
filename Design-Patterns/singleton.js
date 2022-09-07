function Logger(count) {
    this.count = count;
    this.log = function(message) {
      console.log(`${this.count++} : ${message}`)
    }
}

const LoggerSingleton = (function() {
    let instance;

    return {
        getInstance: function() {
            if(!instance) {
                instance = new Logger(1);
            }
            return instance;
        }
    }
})()


var logger = LoggerSingleton.getInstance();
logger.log("hello1")
logger.log("hello2")
logger.log("hello3")












/* function Counter(value) {
  this.value = value;
}

const Singleton = (function () {
  let instance;
  return {
    getInstance: function() {
      if(instance) {
        return instance;
      }
      instance = new Counter();
      return instance; 
    }
  }
})()

const v1 = Singleton.getInstance();
const v2 = Singleton.getInstance();

v1.value = 10;
console.log(v2)
console.log(v1 === v2) */