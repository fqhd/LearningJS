const myObject = {
	[Symbol.iterator]: function (){
		return {
			count: 0,
			next: function(){
				if(this.count==10){
					var finished = true;
				}else{
					var finished = false;
				}
				this.count++;
				return { value: '3', done: finished };
			}
		}
	}
};

for(let i of myObject){
	console.log(i);
}
