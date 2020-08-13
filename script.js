"use strict";
const input = prompt('Enter a text', '');
const messageEL = document.createElement('p');
messageEL.innerText = input;

const messageBox = document.querySelector('.messages');
messageBox.append(messageEL);
