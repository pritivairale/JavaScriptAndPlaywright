/*  Boolean
      Boolean can Store only 2 values.
      1)true
      2)false */
   
let isLogedIn = true;
let hasDiscount = false;
let isAdult = true;
let isSubscribed = false;
 console.log(typeof isLogedIn);
 console.log(typeof isAdult);
 
 // Boolean using Conversion Operator
 let a= 50;

 let b = a <= 30;
 console.log(b);  //false

 let c= a>=30; 
 console.log(c);  //true

 //---------  (IMP) Boolean Conversion -----------

 console.log(Boolean("")); // false
 console.log(Boolean(0));  //false
 console.log(Boolean(1));  //true
 console.log(Boolean(null)); //false
 console.log(Boolean("hi")); //true
 console.log(Boolean(undefined)); //false
 console.log(Boolean()); // false
 

 console.log("----------------------------------------");
          console.log(Boolean(0));      // false
          console.log(Boolean(""));    //false
          console.log(Boolean(" "));    //true
          console.log(Boolean("0"));   //true 
          console.log(Boolean([]));     //true
         console.log(Boolean(null));   //false
         console.log(Boolean(undefined));   //false
         console.log(Boolean(NaN));     //false
         console.log(Boolean(-1));      //true
         console.log(Boolean("false"));      //true


