// Using if....else
let age = 20;
if(age >= 18){
console.log("Adult");
}else{
console.log("Minor");
}


//Using Ternary Operator
let age1 = 20;
 let result= (age1 >= 18) ? "Adult" : "Minor";
console.log(result)

// Nested Ternary Operator 
let num = 0;
let result1 = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(result1); 

// Print pass / Fail
let marks = 65;
let result2 = marks >= 35 ? "Pass" : "Fail";
console.log(result2); 
