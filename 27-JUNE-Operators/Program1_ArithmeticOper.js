// Arithmetic Operators
/*  1) + Addition
    2) - Substraction
    3) * Multiplication
    4) / Division
    5) % Modulus(Remainder)
    6) ** Exponention (Power)  */


 let a = 20;
 let b = 10;
 c= a+b;
 d= a-b;
 e=c-d;
 console.log(e);
 console.log(c);
 console.log(d);
 console.log("-------------------------------------------");
 console.log("Addition = "+ (a+b));  //30
 console.log("Substraction = "+ (a-b));  //10
 console.log("Multiplication = "+ (a*b)); //200
 console.log("Division = "+ (a/b)); //2
 console.log("Modulus = "+(a%b)); //0
 console.log("Exponention= "+ (a**2)); //400 (20*20)
 console.log("Exponention= "+ (a**3)); //8000 (20*20*20)
 
console.log("------------------------------------");

console.log(5%2);  // 1
console.log(10%3);  //1
console.log(2**3);  // (2*2*2)=8 
console.log(10/0);  //Infinity
console.log(-10/0);  //-Infinity
console.log(0/0); //NaN

console.log("---------------------------------------");

function Operator(a , b , c  ){
    console.log("Addition is " + (a + b));
}
Operator(4,5);

console.log("-------------------------------------------");
function OperatorSub(a , b , c  ){
    return a - b ;
}
 let result= OperatorSub(4,5);
 console.log("Substraction = " ,result);
