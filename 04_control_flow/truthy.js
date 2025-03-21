const userEmail=/*"pratham@gmail.com"*/[]

if(userEmail){
    console.log("Got User Email");
} else {
    console.log("Don't have user Email");
    
}

// falsy value ==  false, 0 , -0, Big Int 0n, null , undefine , NaN 

// truty value == "0", "false"., " ", [], {}, function(){}

// if(userEmail.length ===0 ){
//     console.log("Array is Empty");
    
// }

const emptyObj ={}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
    
}

// Nullis Coalescing Operator(??) : Null undefined

let val1;
// val1 = 5?? 10
// val1 = null?? 10
val1 = undefined?? 19


console.log(val1);

// Terniary Operator

// condition ? true : false

const icetea=100

icetea <= 80 ? console.log("sahi he"): console.log("Rehne de Bhai");