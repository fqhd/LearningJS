function* generator(value){
	let myArray = [1, 2, 3];
	yield value;
	yield myArray[0];
	yield myArray[1];
	yield myArray[2];
}

let myIterator = generator('ooga booga');

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
