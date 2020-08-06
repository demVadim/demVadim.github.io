"use strict";
let arr = [12,23,34,53,89];

const number = + prompt('Enter numbers')

const newArr = arr.filter(function(el) {
	return el<number;  
});

console.log(newArr);