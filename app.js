var add = function (n1, n2) { return n1 + n2; };
//this function doesn't return anything so typescript infers the void return type
var printResult = function (num) {
    console.log('Result ' + num);
};
// printResult(3);
var combineValues;
combineValues = add;
// console.log(combineValues(4,2))
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(5, 3, printResult);
