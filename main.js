class Cat {
	meow(){
		console.log('Meow');
	}
	eat(food){
		with(food){
			console.log('I just ate ' + type);
		}
	}
}

let ourCat = new Cat();

ourCat.meow();
ourCat.eat({ type: 'Tuna' });