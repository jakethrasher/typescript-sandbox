"use strict";
function addNums(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    showResult ? console.log(phrase + result) : result;
}
;
const number1 = 10;
const number2 = 3;
const logResult = true;
const resultPhrase = 'The sum is ';
addNums(number1, number2, logResult, resultPhrase);
