"use strict";
const add = (n1, n2) => n1 + n2;
//this function doesn't return anything so typescript infers the void return type
const printResult = (num) => {
    console.log('Result ' + num);
};
// printResult(3);
//function type
let combineValues;
combineValues = add;
// console.log(combineValues(4,2))
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandle(5, 3, printResult);
