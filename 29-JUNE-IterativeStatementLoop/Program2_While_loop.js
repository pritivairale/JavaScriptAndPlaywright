//print 1 to 5
i=1;
while(i <= 5)
    {
        console.log(i);
        i++;
    } 
console.log("---------------------")
 
//print even numbers
num=2;
while(num <= 10)
{
 console.log(num)
 num += 2;
}

console.log("----------------------")
//print odd numbers:
console.log("odd Numbers:");
num2=1;
while(num2 <= 10)
{
    console.log(num2);
    num2 += 2;
}


console.log("------------------------");
//print even and odd numbers from 1 to 10.
num3 = 1;
while(num3 <= 10)
{
    if(num3 % 2 === 0)
    {
        console.log(`Even Numbers are : ${num3}`)
    }
}

console.log("---------------------------------------");
//Write a program to reverse a number using a loop. (Example: 12345  54321)

let originaNumber = 12345;
let reverseNumber = 0;
let temp = originaNumber;
 while(temp > 0){
    let digit = temp % 10;
    reverseNumber = reverseNumber * 10 + digit;
    temp = Math.floor(temp / 10);
 }console.log(`Reverse of ${originaNumber} is = ${reverseNumber}`); 

 console.log("-------------------------------------")

 //Write a program using a while loop to print numbers from 10 down to 1 (reverse counting).

 let revNumber = 10;
 while(revNumber >= 1){
    console.log(revNumber);
    revNumber--;

 }console.log("Times up");