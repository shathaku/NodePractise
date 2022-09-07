function objectKeyChange(obj, keyNameObj) {
	return Object.keys(obj).reduce((newObj, k) => {
		if(keyNameObj[k]) {
			newObj[keyNameObj[k]] = obj[k];
		} else {
			newObj[k] = obj[k];
		}
		return newObj;
	}, {});	
}

console.log(objectKeyChange({ name: 'Bobo', job: 'Programmer', shoeSize: 100 }, { name: 'firstName', job: 'Actor' }));