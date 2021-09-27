class Animal {
	constructor(type){
		this.type = type;
	}
}

class Dog extends Animal {
	constructor(name, type){
		super(type);
		this.name = name;
	}
	printType(){
		console.log(this.name + ' is a ' + this.type);
	}
}

let myDog = new Dog('George', 'Lion');

myDog.printType();

myDog.type = 'Zebra';

myDog.printType();
