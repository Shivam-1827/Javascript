// Singleton => when we create objects like this Object.create

// Objects literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Shivam",
    "full name": "Shivam Yadav",
    [mySym] : "myKey1",  //used when symbol is used to represent inside the objects
    age: 18,
    location: "Delhi",
    email: "Shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Minday", "Tuesday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);
// console.log(JsUser);

// JsUser.email = "Shivam@chatgpt.com";
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email = "Shivam@microsoft.com";
// console.log(JsUser);

// JsUser.greeting = () =>{
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = () =>{
//     console.log(`Hello JS user, ${JsUser["full name"]}`);
// }

// JsUser.greeting();
// JsUser.greetingTwo();

// *********************************************
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstName: "Shivam",
            lastName: "Yadav"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userName);
// console.log(regularUser.fullName.userName.firstName);
// console.log(regularUser.fullName.userName.lastName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj3 = {5:"a", 6:"b"};

// const obj4 = {obj1,obj2};
// const obj4 = Object.assign({}, obj1, obj2,obj3);

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const user=[
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "JavaScript",
    price:"999",
    courseInstructor: "Hitesh"
}

// const {courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(instructor);