const cluster = require('cluster');
const express = require('express');
const numCPUs = require('os').cpus().length;
const app = express();

if(cluster.isMaster) {
	console.log(numCPUs);
	cluster.fork();
	cluster.fork();
} else {
	app.get('/', (req, res) => {
		res.send("hello");
	});

	app.get('/test', (req, res) => {
		const start = Date.now();
		while(Date.now() - start < 5000) {}
		res.send("test");
	});
	app.listen(3333);
}