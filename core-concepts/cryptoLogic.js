const crypto = require('crypto');
//process.env.UV_THREADPOOL_SIZE=1;

const start = Date.now();
//console.log(process.env);

setTimeout(() => {
	console.log('timeout:', Date.now() - start);
}, 1500);

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
	console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
	console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
	console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
	console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
	console.log('5:', Date.now() - start);
});