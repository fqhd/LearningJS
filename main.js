const carObj = {
	age: 10,
	milage: 20
};

function myFunc({milage, age}){
	console.log('Milage: ' + milage);
	console.log('Age: ' + age);
}

myFunc(carObj);