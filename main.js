function sum(){
	let a = 0;
	function increaseSum(){
		return a++;
	}
	return increaseSum;
}

let incrementingFunction = sum();
console.log(incrementingFunction());
console.log(incrementingFunction());
console.log(incrementingFunction());
console.log(incrementingFunction());
console.log(incrementingFunction());
console.log(incrementingFunction());
let anotherIncrementingFunction = sum();
console.log(anotherIncrementingFunction());
console.log(anotherIncrementingFunction());
console.log(anotherIncrementingFunction());
console.log(anotherIncrementingFunction());
console.log(anotherIncrementingFunction());
console.log(incrementingFunction());
