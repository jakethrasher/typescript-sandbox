function addNums(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2
    showResult ? console.log(phrase + result) : result
};

const number1 = 10;
const number2 = 3; 
const printResult = true;
const resultPhrase = 'The sum is '

addNums(number1, number2, printResult, resultPhrase)