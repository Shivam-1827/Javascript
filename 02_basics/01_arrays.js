const myArr = [0,1,2,3,4,5, true, "Shivam"];
// // Shallow copy of an object is the copy whose propertoes share the same references(points to the same underlying values) as those of the source object drom which the copy was made.
// // Deep copy of an  object is a copy whose properties do not share the same refernces(points to the same underlying values) as those of the source object from which the copy was made.

// const myArr2 = new Array(1,2,3,4,5,6,7);

// // Arrays  methods
// myArr.push("Yadav"); //Adds the element to the end of the statement
// console.log(`After usong the push funnction`);
// console.log(myArr);    
// myArr.pop();  // Removes the last element of the array
// console.log(`After using pop statement`);
// console.log(myArr);

// myArr.unshift(21);   // Adds the element at the beginning of the array
// console.log(`After using unshift method`);
// console.log(myArr);

// myArr.shift();   //Removes the element from the begining of the statement
// console.log(`After using shift method.`);
// console.log(myArr);

// console.log(myArr.includes("Shivam"));    // Searches for the element 9 in the array

// console.log(myArr.indexOf("Shivam"));

// const newArr = myArr.join();  // adds the array and converts it into the string data type
// console.log(myArr, typeof myArr);
// console.log(newArr, typeof newArr);

// console.log("A ", myArr);
// const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3);
// console.log(myn2);
// console.log("C ", myArr);

// A  [ 0, 1, 2, 3, 4, 5, true, 'Shivam' ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5, true, 'Shivam' ]
// [ 1, 2, 3 ]
// C  [ 0, 4, 5, true, 'Shivam' ]
// In above operation when we use slice operation like this ( 1, 3) then element at the 1st and 2nd index is included but element at the 3rd index is not included and also the slice method do not effect the original array
// But when we use the splice method like this (1,3) then is this case the element at the 1st , 2nd and 3rd index gets included and also splice method effects the original array and cuts the splice part from tyhe original array


const marvel_heros = ["thor", "IronMan", "spiderman"];
const dc_heros = ["Superman", "flash", "batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros];  //spread operator
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[8,9,1,[3,5,6]]];
const anotherRealArray = anotherArray.flat(Infinity);
console.log(anotherArray);
console.log(anotherRealArray);

console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam"));
console.log(Array.from({name: "Shivam"})); 

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));
