let factoryFunction = () => {
	return {
		age: 30,
		myFunction: function(){
			console.log('This is my factory function');
		}
	}
}

let obj = factoryFunction(); // Cannot use new
let mySymbol = Symbol(); // Cannot use new the same way we can't use new for factoryFunction()

obj.myFunction();