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