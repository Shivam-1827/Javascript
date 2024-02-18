"use strict"; // treat all the js version as newer version

let name = "Shivam" // string
let age = 18 //number
let isLogged = false  //boolean
let Null = null //null
let a = undefined   // undefined

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standardalone value
// undefined =>
// symbol => unique

// conversion of one data type to other data type 
//  "33" => 33
//  "22abc" => NaN
// true => 1; false => 0;
// undefined => NaN
// null => 0
// when empty string is converted into the boolean it gives output as false
// but when something is written inside the string then its boolean value is true


// Data types
// Primitive
// 7 types:  String, Number, Boolean, null, undefined, Symbol, BigInt

// Refernce type(Non-primitive type): 
//  Array, Objects, functions

// Js is dynamically typed number

const id = Symbol('123');
const anotheIid = Symbol('123');

console.log(id);
console.log(anotheIid);
console.log(id === anotheIid);
console.log(id == anotheIid);


// *****************************************************
// Stack(Primitive), Heap(Non-primitive)

// When we declare a primitive variable then stack memory gets allocated and if we are allocating the same variable value to the another variable then copy of that variable gets created.
// When we declare a non-primitive data type variable then heap gets allocated if we assign value of that variable to another variable then by reference it gets created .
// const var1 = { ...........}
// const var2 = var1 
// If we change the value of var2 the original value gets change and that change occurs because of reference.

