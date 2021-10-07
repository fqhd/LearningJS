const myApple = {
	age: 45,
	name: 'Fahd'
};

function myFunction({name, age}){
	console.log('Name: ' + name);
	console.log('Age: ' + age);
}

myFunction(myApple);