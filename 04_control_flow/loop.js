// for of 

// ["", "", ""]

// [{}, {}, {}]

const arr= [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Map

const map= new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// console.log(map);

for(const [key, value] of map) {
    // console.log(key, ':-', value);
       
}

// const myobject= {
//     'game1': 'NFS',
//     'game2':'Spiderman'
// }
// for (const [key, value] of myobject) {
//     console.log(key, ':-', value);
    
// }

const myObject= {
    js: 'java script',
    cpp: "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for(const key  in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const coding =['js', 'rubby', 'cpp', 'swift']

// coding.forEach( function (val){
//     console.log(val)
// })

coding.forEach(  (item) => {
    // console.log(val)
})

function printMe(item){
    console.log(item);   
}

// coding.forEach(printMe)

coding.forEach((item, index, arr)=> {
    // console.log(item, index , arr)
})

const myCoding = [
    {
        languageName: "Java script",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
    
})