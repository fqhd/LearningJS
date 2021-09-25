const myObject = {
	age: 32,
	myFunction: function() {
		console.log(this);
	},
	hit: () => {
		console.log(this); // This will not work because this doesn't exist inside arrow functions
	}
};

myObject.hit.bind(myObject);// This will not work because hit is an arrow function

function testFunction(){
	myObject.myFunction();
	myObject.hit();
}
testFunction();