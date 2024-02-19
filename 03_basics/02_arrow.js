const user = {
    userName: "Shivam",
    price: 99,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
};

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this);       //this will print an empty object because this is executed inside the node
// But the same line i.e. if we log this key inside the browsers console then this will will print the window

// function chai() {
//     let userName = "Shivam";
//     console.log(this.userName);  //this key will not works in case of function but this key will work in case of objects
//     // this will give result as undefined
// }
// chai();

// const chai = function () {
//     let userName = "Shivam";
//     console.log(this.userName);  //Result is same as the above function.
//     console.log(this);   // here this will print various global keyword inside the object and this will not print empty keyword
// }
// chai();

// const chai = () => {
//     let userName = "Shiavam";
//     console.log(this.userName);
//     console.log(this);   // Here if we will try to print this keyword it will print only empyt object.
// }
// chai();


// In case of arrow function if we will use curley braces and if we want to return anything then we have to use return keyword but if use paranthesis then we do not needs to use the return keyword to return values and this is valid for only single line of code;

// const addTwo = () => {
//     let num1 = 23;
//     let num2 = 12;
//     let sum = num1 + num2;
//     return sum;
// }

// console.log(addTwo());

// const addTwo = () => (
//     2 + 4 + 23 - 4 * 243 / 7
// );

// console.log(addTwo());

const addTwo = () => ({ useName: "Shivam" });   // if we want to return an object then we have to wrap inside a paranthesis if we will try to return inside a curley braces then then this will give undefined as result
console.log(addTwo());