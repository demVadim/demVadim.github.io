"use strict";
const arr = [2,3,5,1,3];

const input = +prompt('Enter a number: ');	
const index = arr.indexOf(input);

if(index > -1){
	arr.splice(index, 1);
}


console.log(arr);
