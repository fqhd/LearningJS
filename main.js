'use strict';

class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

let person = new Person('Fahd', 18);
person.speed = 10;

console.log(person.name);
console.log(person.age);
console.log(person.speed);