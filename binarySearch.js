function binarySearch(array, value){
	let start = 0;
	let end = array.length;
	//let a = array.sort();
	let middle = Math.floor((end-start)/2);
	console.log(array[middle] === value);
	if(array[middle] === value)	return middle;
	else if(array[middle]>value) {
		array.splice(middle+1, end);
		return binarySearch(array, value)
	} else {
		array.splice(start,middle-1);
		return binarySearch(array, value);
	}
}

let res = binarySearch([2,5,8,15,30], 15);
console.log(res);