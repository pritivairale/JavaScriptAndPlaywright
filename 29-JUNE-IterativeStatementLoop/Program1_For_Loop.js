// For loop
// Print 1 to 50 numbers
 for(num = 1; num <= 20; num++)
 {
    console.log(num);
 }
console.log("--------------------------------------------")
 //Write a program to print all even numbers from 1 to 50.

for(let i = 2; i<= 50; i+=2)
 {
    console.log(i);
 }
                      //or
   
for(let j = 1; j <= 50; j++)
    {
        if(j % 2 === 0)
        {
            console.log(j);
        }
    }                      

 console.log("------------------------------------------")   

//Print the sum of 1 to 100

 let total=0;
 for(let sum = 1; sum <= 100; sum++)
 {
    total += sum;
 }
   console.log(`Addition of 1 to 100 = ${total}`);

 console.log("---------------------------------------")  
 
 //Write a program to the multiplication of table of a given number(e.g. 7).
 
 let tableof = 7;
 for(let i = 1; i <= 10; i++)
 {
    let finalResult = tableof * i ;
   console.log(`${tableof} * ${i} = ${finalResult}`)
 } 

 console.log("--------------------------------------")

 //Write a program to find the factorial of a given number using a for loop.(Example: 5! = 120).
let n = 5;
let factorial = 1;
for(i = 1 ; i <= n; i++){
    factorial = factorial * i ;

} console.log(`Factorial of ${n} = ${factorial}`);

console.log("---------------------------------------");




