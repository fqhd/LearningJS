'use strict';

const parents = ['mary', 'sam'];
const children = ['stale', 'john', 'robert'];
const family = parents.concat(children);

let sum = () => {
	return 9;
}

let concat = () => {
	return [].concat(parents, children);
}

(() => {
	console.log(sum());
	console.log(concat());
})();
