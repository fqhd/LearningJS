export default class Car {
	#milage;
	constructor(brand, milage, owner){
		this.#milage = milage;
		this.brand = brand;
		this.owner = owner;
	}
	get milage(){
		return this.#milage;
	}
}

export let calcMilage = (car) => {
	switch(car.owner){
		case 'Fahd':
			return 500;
		case 'Tom':
			return 10_000;
		case 'Smith':
			return 200_000;
		default:
			return -1;
	}
}