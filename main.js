class Citizen {
	constructor(name, age){ // Constructor(called only when using new)
		this.age = age; // Not a private variable (facepalm)
		this.name = name;
	}
}

let citizens = [
	new Citizen('Frederich', 32),
	new Citizen('George', 52),
	new Citizen('Joshua', 12),
];

citizens.map(citizen => citizen.age = 20);

console.table(citizens);