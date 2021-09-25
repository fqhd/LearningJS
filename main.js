const myArray = [1, 2, 3, 4];
let arrayIterator = myArray[Symbol.iterator]();

const myObject = {
	jump: function(){
		console.log('Other object is jumping');
	}
}

myObject.jump();
myObject['jump']();

console.log(typeof(Symbol.iterator));