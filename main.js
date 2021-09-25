const myObject = {
	size: 5
};

console.log(myObject.size);

Object.defineProperty(myObject, 'iterator', {
	get() {
		return 'boobs';
	}
});

console.log(myObject.iterator);