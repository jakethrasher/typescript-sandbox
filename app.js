function addNums(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    showResult ? console.log(phrase + result) : result;
}
;
var number1 = 10;
var number2 = 3;
var printResult = true;
var resultPhrase = 'The sum is ';
addNums(number1, number2, printResult, resultPhrase);
