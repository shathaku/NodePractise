function arrayCombi(arr1, arr2) {
	return arr1.reduce((acc, a) => {
		arr2.forEach((b) => {
			acc.push([a, b])
		})
		return acc
	}, []);
}

console.log(arrayCombi([1,2,3], ['a','b']));

//[[1,a], [1,b], [2,a], [2,b], [3,a], [3,b]]