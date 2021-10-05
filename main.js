const myApple = {
	age: 45,
	name: 'Fahd'
};

function myFunction(myObj){
	const { age, name } = myObj;
	console.log('Name: ' + name);
	console.log('Age: ' + age);
}

myFunction(myApple);