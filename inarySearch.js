function binarySearch(array, value, start, end){
	let start = 0;
	let end = array.length;
	//let a = array.sort();
	let middle = Math.floor((end-start)/2);
	if(array[middle] === value)	return middle;
	else if(array[middle]>value) {
		middle-1;
		array.splice(start,middle-1);
		binarySearch(array, value)
	} else {
		start = middle+1;
		array.splice(middle+1, end);
		binarySearch(array, value);
	}
}

console.log(binarySearch([2,5,8,15,30], 5);