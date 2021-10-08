class Apple {
	constructor(name, age){ // Constructor(called only when using new)
		this.age = age; // Private variable
		this.name = name;
	}
}

let myArray = [
	new Apple('George', 20),
	new Apple('George', 30),
	new Apple('George', 60),
	new Apple('George', 90),
];

let getApple = apple => {
	return apple.age > 30;
}

let filteredApples = myArray.filter(apple => {
	return apple.age < 50; 
});

for(let i of filteredApples){
	console.log(i);
}