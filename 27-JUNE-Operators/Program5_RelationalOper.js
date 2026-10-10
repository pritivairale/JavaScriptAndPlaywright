console.log(NaN == NaN);       //false
console.log(NaN === NaN);      //false
console.log(isNaN("hello"));    //true
console.log(isNaN(123));      //false
console.log(isNaN("123"));     //false

console.log("-----------------------------");

 
/*The value
The Data type (using typeof)
Whether it is truthy or falsy
Test it with the following inputs:
0, “” , null, undefined , NaN , “hello” , 42 , [] , false */

let a = 42;
console.log(typeof a);

console.log(a === 0);
console.log(a === "");
console.log(a === null);
console.log(a === undefined);
console.log(a === NaN);
console.log(a === "hello");
console.log(a === 42);
console.log(a === ([]));
console.log(a === false);

console.log("-------------------------------------------");

let a1 = 35;
let b = 10;
console.log(` Before Swaping  a = ${a1} , b =  ${b}.`);
    a1 = a1 + b ;
    b = a1 - b ;
    a1 = a1 -b ;
console.log(`After Swaping  a = ${a1} , b =  ${b}.`);

console.log("----------------------------------------------");
 
let a2 = 35;
let b2 = 10;
let c ;

console.log(` Before Swaping  a = ${a1} , b =  ${b}.`);
    a1 = b
     b = 

console.log(`After Swaping  a = ${a1} , b =  ${b}.`);





