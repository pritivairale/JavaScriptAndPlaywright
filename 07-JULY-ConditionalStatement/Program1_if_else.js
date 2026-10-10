
// Program to print no. is  0 , positive or negative
let a = 23;

if (a === 0) {
    console.log(`${a} is zero Number`);

} else if (a > 0) {
    console.log(`${a} is Positive Number`);

} else {
    console.log(`${a} is Negative Number`);
}

// Proram to print person is eligible for vote.
// using Ternary Operator

const age=20;
const result= (age >= 18) ? "Eligible for Vote" : "Not Eligible for Vote"
console.log(result);

// Write a Program that takes marks(0-100)and prints the grade.

let marks = 98;
if (marks >= 90){
    console.log("You Pass with Grade A");
}else if(marks >= 80){
    console.log("You pass with Grade B");
}else if(marks >= 70){
    console.log("You pass with Grade C");
}else if(marks >= 60){
    console.log("You pass with Grade D");
}else{
    console.log("Fail");
}

console.log("----------------------------------------");

let x=10;
if(x>5){
      console.log("Greater");
}else if(x>8){
      Console.log("Much Greater");
}else {
     Console.log("Small");
}

// Write a Program to Check if year is leap or not.

let year=2027;
if(year % 4 === 0 && year % 100 !== 0)
{
    console.log(`${year} is Leap Year !`);
}else {
    console.log(`${year} is not Leap Year !`);
}

