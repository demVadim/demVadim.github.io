"use strict";
const num = [23,25,56,67,12];

const input = +prompt('Enter a number: ');
const index = num.indexOf(input);

if(index > -1){
	console.log(num[index]);
}else {
	console.log('non');
}
