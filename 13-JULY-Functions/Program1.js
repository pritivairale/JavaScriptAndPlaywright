// What is Function? 
/* A function is a reusable block of code that perform a specific task.
Write Once Use many. */
// There are four types of functions
/*     1) Function Declarstion 
       2) Function Expression
       3) Anynomus Function
       4) Arrow Function    */

// 1) Function Declaration
function wish(){
    console.log("To Become A Automation Engineer");
}
wish();

console.log("----------------------------------------");
// function with parameters

function add(a , b){  //------Parameters a , b
    console.log("Addition :" , a+b);

}add(10 ,25); //-------------arguments passing

console.log("-------------------------------------------");

// fuction with return

function sub(a , b){
          let c = a - b;
      console.log("Substractin :" ,c );
      return c;
}let result = sub(30,20);
console.log(result);
// return function use! you can reuse the return function 
let add1 = 5;
console.log(`Function Additon: ${add1 + result}`); // resuit is in function sub()

console.log("--------------------------------------------");
 
// 2 ) Function Expression

let mull = function(num1 ,num2){
         console.log("Multiplication :", num1 * num2);
 }; mull(10,20);

console.log("--------------------------------------------");
 // 3) Arrow Function
  
let div = (num4 , num5)=>{
    console.log(`Division is : ${num4/num5} `);
}; div(2 ,6);
 






