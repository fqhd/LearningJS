class Apple {
	#age;
	constructor(name, age){ // Constructor(called only when using new)
		this.#age = age; // Private variable
		this.name = name;
	}
	get age(){
		return this.#age;
	}
}

let myName = 'George';
let myApple = new Apple(myName, 12);
console.log(myApple.name); // Prints George

myName = 'Fahd'; // Changing my name variable

console.log(myApple.name); // Still prints George

// It doesn't change because only objects can be passed by reference