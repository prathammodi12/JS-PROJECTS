// const tinderUser = new Object()

const tinderUser ={} 

tinderUser.id= "123abc"
tinderUser.name ="Pratham"
tinderUser.isLoggedIn =true

// console.log(tinderUser)

const regularuser= {
    email: "Pratham@gmail.com",
    fullname :{
        username: {
            firstname: "Pratham",
            lastname:"Modi"
        }
    }
}

console.log(regularuser.fullname.username.lastname);

// const obj1= {1:"a", 2:"b"}
// const obj2 = {3:"a", 4: "b"}

// const obj3= {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('id'));

