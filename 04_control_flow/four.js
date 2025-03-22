const mynums= [1,2,3]

// const myTotal=mynums.reduce(function (acc,curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc+curval
// },34)

// const myTotal= mynums.reduce( (acc,curval) => (acc+curval), 0)

// console.log(myTotal);

const shopingcart=[
    {
        itemName: " js course",
        price: 2999
    },
    {
        itemName: " java course",
        price: 6999
    },
    {
        itemName: " python course",
        price: 4999
    },
]


const priceToPay= shopingcart.reduce((acc,item) => (acc+item.price), 0)

console.log(priceToPay);
