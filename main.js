let mySymbol = Symbol.for(9);
let myOtherSymbol = Symbol.for(9);
console.log(mySymbol);
console.log(myOtherSymbol);

if(mySymbol === myOtherSymbol){
	console.log('They are equal!');
}