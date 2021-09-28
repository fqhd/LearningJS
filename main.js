class Animal {
	sleep(){
		console.log('Animal is sleeping');
	}
}

function Feline(Animal){
	return class extends Animal {
		purr(){
			console.log('Purring...');
		}
	}
}

class Cat extends Feline(Animal) {
	meow(){
		console.log('meow UwU 🐱🌈');
	}
}

let myCat = new Cat();
myCat.meow();
myCat.purr();
myCat.sleep();