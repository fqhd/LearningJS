class Apple {
	constructor(name, age){ // Constructor(called only when using new)
		this.age = age; // Private variable
		this.name = name;
	}
}

let myArray = [
];

for(let i = 0; i < 200; i++){
	myArray.push(new Apple('George', parseInt(Math.random() * 100)));
}

let validArray = myArray.sort((a, b) => a.age - b.age);

console.table(validArray);