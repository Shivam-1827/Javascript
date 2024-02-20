// for of loop

const arr = [12,5,2,45,65,75];
for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!";
for(let val of greetings){
    // console.log(val);
}

// MAPS

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");

for(let [key, val] of map){
//    console.log(`The country name with key ${key} is ${val}.`);
}


// Objects are not iterable with for of loop but we can iterate objects using for in loops 


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(let key in myObject){
    // console.log(`key is ${key} and value is ${myObject[key]}`);
}

// We can iterate array with the help for of loop as well as with the help of for in loop 
//  When we are iterating array with for of loop then we gets value at respective indexes but wqhen we iterate with the help of for in loop then we gets the indexes for the respective values

const programming = ["js","rb","py","java","cpp"];
for(const key in programming){
    // console.log(programming[key]);
}


// For each loops

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val){
    // console.log(val);
})

coding.forEach((val)=>{
    // console.log(val);
})

coding.forEach((val,idx,arr)=>{
    console.log(val, idx, arr);
})