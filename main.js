const myObject = {};

myObject['name'] = 'George';
myObject[3] = 'Hello';
myObject[false] = 'true';

console.log(myObject['name']);
console.log(myObject[3]);
console.log(myObject[false]);
console.log(myObject);

Object.defineProperty(myObject, 'jordan', {
	get (){
		return 6;
	}
});

const myOtherObject = {
	get iAmAFunction(){
		console.log('Hello, you just called a function lol');
	}
};

console.log(myObject.jordan);
myOtherObject.iAmAFunction;