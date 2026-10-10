//Number represent all numeric values in javascript.
//It includes integers, decimals, positive and negative numbers.

//Integer
let age=30;
console.log("My age is "+age);
console.log(typeof age);

//Decimal (Floating point)
let price=90.99;
console.log("Price of Product is "+price);
console.log(typeof price);

//Negative 
let temperature=-20;
console.log("Todays Temperature is "+temperature);
console.log(typeof temperature);  

//Real Time Example- Shopping Bill

let itemPrice=200;
let quantity=4;
let discount=50;

let subTotal=itemPrice * quantity;
let totalAfterDiscount = subTotal-discount;
let tax = totalAfterDiscount * 0.12;
let finalBill=totalAfterDiscount + tax;

 console.log("subtototal : "+subTotal)
 console.log("TotalAfterDiscount : "+totalAfterDiscount);
 console.log("GST(12%): "+tax);
 console.log("FinalBill : "+finalBill);





