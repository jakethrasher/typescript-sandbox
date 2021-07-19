const add = (n1: number, n2: number):number => n1 + n2;

//this function doesn't return anything so typescript infers the void return type
const printResult = (num: number) => {
    console.log('Result ' + num)
}
// printResult(3);

//function type
let combineValues: (x: number, y:number)=>number;
combineValues = add;

// console.log(combineValues(4,2))


const addAndHandle = (n1: number, n2: number, cb: (num:number)=>void) =>{
    const result = n1 + n2; 
    cb(result);
};

addAndHandle(5, 3, printResult)