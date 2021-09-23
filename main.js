'use strict';

let object = {w: 8000, yourOtherVariable: 9, get weight() {return this.w}}
object.myVariable = 88;
Object.defineProperty(object, 'z', { value: 9, writtable: false });
Object.defineProperties(object, {
	x: {
		value: undefined,
	},
	y: {
		value: 10,
	}
});

console.log(object.x);
helloWorld(object, object.y);

function helloWorld(a){
	console.log(a.y);
}
