function* generator(){
	let myArray = [1, 2, 3];
	yield myArray[0];
	yield myArray[1];
	yield myArray[2];
}

let myIterator = generator();

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
