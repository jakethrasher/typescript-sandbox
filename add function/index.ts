const input1 = document.getElementById('input-1')! as HTMLInputElement;
const input2 = document.getElementById('input-2')! as HTMLInputElement ;
const addButton = document.getElementById('button')! as HTMLInputElement;

const addNums = (num1: number, num2: number) => num1 + num2;

addButton.addEventListener('click', ()=>{
    console.log(addNums(+input1.value, +input2.value))
})