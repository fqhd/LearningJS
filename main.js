let maxInteger = Number.MAX_SAFE_INTEGER;
maxInteger = 24023523242394872039875093875249879487598723095823565086723528n;
for(let i = 0; i < 10; i++){
	maxInteger *= maxInteger;
}
console.log(maxInteger);