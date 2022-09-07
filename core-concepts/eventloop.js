const fs = require('fs');
const https = require('https');
const dns = require('dns');
const crypto = require('crypto');

const start = Date.now();

/*setTimeout(() => {
		console.log(Date.now() - start);
}, 100);*/

function doRequest() {
	https.request('https://www.google.com', res => {
		res.on('data', () => {});
		res.on('end', () => {
			console.log("HTTPS:", Date.now() - start);
		});
	}).end();
}

function readOperation() {
	
		fs.readFile('app.js', () => {
			console.log("FS:", Date.now() - start);
		});
	
	
}

function cryptoOperation() {
	crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
		console.log('1:', Date.now() - start);
	});
}




//readOperation();

cryptoOperation();
cryptoOperation();
cryptoOperation();
cryptoOperation();
//dnsOperation();

readOperation();

//doRequest();
