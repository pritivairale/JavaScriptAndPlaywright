

let num = 23;
let num2 ="23";
console.log(num == num2);
console.log(num === num2);
console.log(typeof num2);
console.log( typeof num);
console.log(num != num2); // 23 != 23
console.log(num !== num2); 

console.log("-----------------------------");

function test()
{
    let x = 10;
         if(true){
           let x = 20;
           console.log("Inside if :" ,x);
          }
console.log("Outside if :",x);
}
test()



function test()
{
    var x = 10;
         if(true){
           var x = 20;
           console.log("Inside if :" ,x);
          }
console.log("Outside if :",x);
}
test()
