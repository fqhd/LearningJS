class Animal {
	constructor(type){
		this.type = type;
	}
}

class Dog extends Animal {
	#age = 35;
	constructor(name, type){
		super(type);
		this.name = name;
		this.#age = 46;
	}
	printType(){
		console.log(this.name + ' is a ' + this.type);
	}
	get age(){
		return this.#age;
	}
	set age(age){
		this.#age = age;
	}
}

let myDog = new Dog('George', 'Lion');

console.log(myDog.age);
