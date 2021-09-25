const myObject = {
	name: 'Bob',
	kill: undefined,
	initKillFunc(killFunc){
		this.kill = killFunc;
	}
};

function ourFunc(){
	console.log(this.name);
}

myObject.initKillFunc(ourFunc);

myObject.kill();

/* 
	The .bind here is very important because with it, we are just sending a function reference
	And the problem with that is that when the function is going to be called(after 1 second),
	There will be no Object scope for the *this* keyword to point to. So *this* will be
	undefined. So a solution to this issue is to pass the function with a *this* property
	instead of having *this* being dynamically calculated.
*/

setTimeout(myObject.kill.bind(myObject), 1000);

let ourFuncRef = myObject.kill;

ourFuncRef();