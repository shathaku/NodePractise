function objectSortByValue(arr) {
	return arr.sort((a, b) => {
		return a.value - b.value;
	});
}

function objectSortByName(arr) {
	return arr.sort((a, b) => {
		if(a.name < b.name){
			return -1;
		} else if (a.name > b.name) {
			return 1;
		} else {
			return 0;
		}
	});
}


var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

console.log(objectSortByName(items));