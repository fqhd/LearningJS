
let myFunction;

myFunction = function(){
	console.log('This is my function');
	console.log('And this function took ' + arguments.length + ' arguments');
}

myFunction(3, 4, 5, 5);