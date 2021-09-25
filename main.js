const car = {
	age: 20,
	brand: 'RollsRoyce',
	speedLimit: 250
};

Object.defineProperty(car, Symbol.iterator, {
	value: function* (){
		yield 1;
		yield 2;
		yield { name: 'boobs' };
	}
});

for(let i of car){
	console.log(i);
	if(typeof(i) === 'object'){
		console.log(i.name);
	}
}