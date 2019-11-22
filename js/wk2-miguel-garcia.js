"use strict";

// TODO 1
/*
Write a function redundant that takes in a string str
and returns a function that returns str.
*/

// function
const redundant = (str) => () => str;
// Demonstrates the return of redundant()
console.log(redundant("apple"));
// set variables to the return value
const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

console.log(f1());
console.log(f2());
console.log(f3());

// TODO 2

// sources
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
https://stackoverflow.com/questions/35368213/getting-arguments-passed-to-an-es6-arrow-function-using-arguments-variable
*/
/*
Create a function that takes a variable number of groups of items,
and returns the number of ways the items can be arranged,
with one item from each group. Order does not matter.
*/

// Task: obtain all the arguments passed by the user
// NOTE: couldn't use arrow functions initially
// 1. I can grab the arguments and console log them
// 2. First solution was pushing arguments into an array then reducing the array
// 3. Second was iteration through the arguments directly
// 4. Final was the implementation of both in ES6 format


// function combinations() {
//     let myArr = [];
//     for (var i = 0; i < arguments.length; i++) {
//         myArr.push(arguments[i]);
//         console.log(arguments[i]);
//     }
//     return myArr.reduce((accumulate, number) => {
//         return accumulate * number;
//     }, 1)
// }

// function combinations () {
//     let combos = 1;
//     for (let i=0; i<arguments.length; i++) {
//         combos = combos * arguments[i];
//     }
//     return combos;
// }

// TODO: Uncomment here
// const combinations = (...args) => args.reduce((accumulate, argument) => argument === 0 ? accumulate : accumulate * argument, 1);
//
// console.log(combinations(5, 5,)); // (25)
// console.log(combinations(2, 3)); // (6)
// console.log(combinations(3, 7, 4)); // (21)(84)
// console.log(combinations(2, 3, 4, 5)); // (6)(24)(120)
// console.log(combinations(6, 7, 0)); // 42

// TODO 3

let studentClass1 = {
    John: [100, 90, 80],
    Bob: [100, 70, 80]
};
let studentClass2 = {
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
};
let studentClass3 = {
    Tim: [93, 84, 49, 71, 76, 83],
    Nick: [88, 91, 74, 72, 63, 68],
    Brad: [100, 94, 72, 64, 58, 81],
    Annie: [79, 93, 82, 82, 63, 87]
};
let studentClass4 = {
    Eddie: [65, 85, 72, 76],
    Brock: [55, 97, 82, 91],
    Jessica: [78, 62, 79, 99]
};

const getBestStudent = (studentClass) => {
    // Container w/student names and averages
    const studentAvgs = [];
    // Convert object into an iterable array
    const students = Object.entries(studentClass);
    // initialize first student name
    let topStudentName=students[0][0];
    // top student container w/name and avg
    let topStudent=[];

    students.forEach(function (student) {
        let average = {
            name: student[0],
            average: student[1].reduce((accumulation, testScore) => {
                return accumulation + testScore;
            },0)
        };
        return studentAvgs.push(average);
    });

    let topStudentAvg = studentAvgs.reduce((highestAvg, student) => {
        if (student.average > highestAvg) {
            highestAvg = student.average;
            topStudentName = student.name;
        }
        return highestAvg;
    }, studentAvgs[0].average);

    // Future access to top student name and average value
    topStudent.push(topStudentName, topStudentAvg);

    return topStudent[0];
};

console.log(getBestStudent(studentClass1));
console.log(getBestStudent(studentClass2));
console.log(getBestStudent(studentClass3));
console.log(getBestStudent(studentClass4));