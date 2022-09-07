function unique(array) {
  var aaa = array.reduce(function(acc, item) {
	  acc.push(acc.find(function(e) {
          return !(e === item);
      }));
      return acc;
  }, [])
  return aaa;
}

unique([1,1,2,3,4]);