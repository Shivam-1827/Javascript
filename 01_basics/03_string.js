"use strict";

const gameName = new String("Shivam-fs");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-1,1);
console.log(anotherString);

const name = "        shivam       ";
console.log(name);
console.log(name.trim());