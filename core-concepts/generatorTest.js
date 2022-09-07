function* test() {
	yield;
}

const gen = test();
console.log(gen);
console.log(gen.next());
console.log(gen.next());