
var express = require('express');
var app = express();
var fs = require('fs');

const parseMyFile = () => {
	return new Promise((resolve, reject) => {
		fs.readFile('./users.json', 'utf-8', function(err, data) {

			if(err) {
			  console.error("unable to read file");
			  reject("unable to read file");
			}
			else {
			  try {
				  data = JSON.parse(data);
				  resolve(data);
			  }
			  catch (e) {
				  console.error("invalid json file");
				  reject("invalid json file");
			  }
			}
		});
});
}

app.get( '/users', async function(req,res) {
	const resp = await parseMyFile();
	console.log(resp);
	res.send(resp);
});


app.listen(3000,function(){
  console.log("listening on port 3000");
});