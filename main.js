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

let totalAges = citizens.reduce((accumulator, currentObject) => {
	return accumulator + currentObject.age;
}, 0	);

console.log(totalAges);