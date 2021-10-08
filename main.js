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

let myName = {name: 'George'}; // Name is now an object
let myApple = new Apple(myName, 12);
console.log(myApple.name.name); // Prints George

myName.name = 'Fahd'; // Changing the name variable inside the myName object

console.log(myApple.name); // Prints Fahd now because we have changed the name variable under the object

// Since we are passing in an object to myApple now, the value of name can be controlled outside of the
// Apple scope because it is being passed by reference since it is an object and objects are always
// passed by reference.