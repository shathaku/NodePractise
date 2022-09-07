const express = require('express');
const app = express();

app.get('/', (req, res) => {
	doPromise().then((r)=> {
		res.send("hello");
	});
	
});

app.get('/test', (req, res) => {
	const start = Date.now();
	while(Date.now() - start < 5000) {}
	res.send("test");
});

function doPromise() {
	const start = Date.now();
	return new Promise((resolve, reject) => {
		while(Date.now() - start < 5000) {
			
		}
		resolve();
	})
}

app.listen(3000);