const car = {
	age: 20,
	brand: 'RollsRoyce',
	speedLimit: 250
};

car[Symbol.iterator] = function* (){
	yield 1;
	yield 2;
	yield 3;
}

for(let i of car){
	console.log(i);
	if(typeof(i) === 'object'){
		console.log(i.name);
	}
}