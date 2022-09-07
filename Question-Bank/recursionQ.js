function factorial(num) {
    if(num == 1) {
        return 1
    } else {
        return num * factorial(num-1)
    }
}
let f = factorial(5);
console.log(f)




function flattenArray(arr, newArr) {
  arr.forEach((elem) => {
    if(Array.isArray(elem)) {
      flattenArray(elem, newArr)
    } else {
      newArr.push(elem)
    }
  });
  return newArr;
}
let retArr = flattenArray([1, [ 2, 3], 4, [5, [6, 7]]], [])
console.log(retArr)