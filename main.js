const person = {
	name: 'John',
	age: 22
};

const handler = {
	get: function(target, property, receiving){
		return 'world';
	}
};

const proxy = new Proxy(person, handler);

console.log(proxy.age);
