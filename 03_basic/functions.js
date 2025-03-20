
function saymyname(){
    console.log('P');
    console.log('R');
    console.log('A');
    console.log('T');    
    console.log('H');
    console.log('A');
    console.log('M');
}
// saymyname()

// function addtwonum(num1 , num2){
//     console.log(num1 + num2);
    
// }
function addtwonum(num1 , num2){
    let result = num1 +  num2
    return result
}
// const result= addtwonum(4,7)
// console.log(result);
 
function loginusermessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage(""))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))

const user={
        username:"Pratham",
        price:"199"
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)

const newArray = [200,400,100,500]

function returnSecondvalue(getArray){
    return getArray[0]
}

console.log(returnSecondvalue(newArray));
