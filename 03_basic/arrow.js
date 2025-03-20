const user ={
    // username : "Pratham",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "Pratham"
//     console.log(this.username);
// }
// chai()

const chai = ()=> {
    let username = "Pratham"
    console.log(this.username);
    
}

chai()

// const addtwo = (num1, num2)=>   {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1+num2

// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) =>({username:   "Pratham"})
console.log(addTwo(4,8));
