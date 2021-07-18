var input1 = document.getElementById('input-1');
var input2 = document.getElementById('input-2');
var addButton = document.getElementById('button');

var addNums = function (num1, num2) { return num1 + num2; };

addButton.addEventListener('click', function () {
    console.log(addNums(+input1.value, +input2.value));
});
