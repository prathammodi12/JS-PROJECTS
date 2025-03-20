// Singleton

// objects literals
// Object.create 

const mysym = Symbol("key1")
const JsUser= {
    name: "Pratham",
    "Full Name":"Pratham Modi",
    age:21,
    [mysym]:'Key1',
    location:"Gandhinagar",
    email:"Pratham@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"] 
}

console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log(typeof JsUser[mysym])
console.log(typeof mysym)


// myArray= ["P","r"]
// myArray[1]

// Object.freeze(JsUser)

JsUser.greeting= function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());
