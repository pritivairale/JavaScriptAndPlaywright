// Program for Factorial

let num = 5;
let fact = 1;
for(let i = 1 ; i <= num ; i++){
    fact *= i;
}console.log(fact);


console.log("----------------");

// Fibonacy Series

let num1 = 10;
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for(let j = 2 ; j < num1 ; j++){
    let c = a + b;
    a=b;
    b=c;
  console.log(c);  
}