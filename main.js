const object = {
	health: 5,
	name: 'Bob Ross',
	get: function(obj, property){
		return 'boobs';
	}
};

console.log(object.get());

Object.defineProperty(object, 'speed', {
	value: 8,
	writtable: false
});

console.log(object.speed);

object.speed = 10;

console.log(object.speed);
