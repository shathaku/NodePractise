function arrayToCSV(arr, columns) {
	return arr.map((e) => {
		return columns.map((k) => {
			return e[k];
		}).join();
	}).join('\n');
}

console.log(arrayToCSV([{a:10, b:20, c:50},{a:30, c: 100}], ['a', 'c']));

let temp = 123;
console.log([...temp.toString()].map(e => parseInt(e)));