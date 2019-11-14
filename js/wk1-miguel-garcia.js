// ( function () {
"use strict";

let test1 = [
    {product: "Milk", quantity: 1, price: 1.50}
];
let test2 = [
    {product: "Milk", quantity: 1, price: 1.50},
    {product: "Cereals", quantity: 1, price: 2.50}
];
let test3 = [
    {product: "Milk", quantity: 3, price: 1.50}
];
let test4 = [
    {product: "Milk", quantity: 1, price: 1.50},
    {product: "Eggs", quantity: 12, price: 0.10},
    {product: "Bread", quantity: 2, price: 1.60},
    {product: "Cheese", quantity: 1, price: 4.50}
];
let test5 = [
    {product: "Chocolate", quantity: 1, price: 0.10},
    {product: "Lollipop", quantity: 1, price: 0.20}
];

const getTotalPrice = groceries => {
    return parseFloat((groceries.reduce((accumulator, produce) => {
        return accumulator + (produce.quantity * produce.price);
    }, 0)).toFixed(2));

    // let amount = 0;
    // groceries.forEach((produce) => {
    //    amount += (produce.quantity) * (produce.price);
    // });
    //  return parseFloat(amount.toFixed(2));
};


console.log(getTotalPrice(test1));
console.log(getTotalPrice(test2));
console.log(getTotalPrice(test3));
console.log(getTotalPrice(test4));
console.log(getTotalPrice(test5));

// })();