function copyObject(obj, newObj = {}) {
    Object.keys(obj).forEach((k) => {
        if(obj[k] instanceof Object) {
            console.log(obj[k])
            newObj[k] = copyObject(obj[k], {})
        } else {
            newObj[k] = obj[k];
            //return newObj
        }
    })
    return newObj
}

console.log(copyObject({a:10, b:20, c: {x:100, y:200}}))