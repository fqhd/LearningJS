const ultimateObject = {
	[Symbol.for('Jordan')]: function() {
		for(let i in arguments){
			this[i] = arguments[i];
		}
	},
	[Symbol.iterator]: function* () {
		for(let i in this){
			yield this[i];
		}
	}
};

ultimateObject[Symbol.for('Jordan')](3, 5, 'George', false, true, 2094);

console.log(...ultimateObject);