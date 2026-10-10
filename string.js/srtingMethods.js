/*let sentence = "Serching using regular";
let serarchIndex= sentence.search(/using/);
console.log(serarchIndex);*/

//let str = "bharti";
console.log("bharti".slice(1,4));  // har

console.log("bharti".substring(1,4)); // har

console.log("bharti".slice(1,-3)); // ha

console.log("bharti".substring(1,-3)); // b
 
console.log("bharti".substring(-2));  //bharti (negative insex consider as 0)

console.log("bharti".slice(-2));   //ti

console.log("bharti".substring(0));  //bharti

console.log("bharti".substring(4,1)); //swap(1,4) // har
console.log("bharti".slice(4,1));   // empty String

/*Q31. 
Convert:"hello world playwright" 
into:"Hello-World-Playwright" 
using split and join. */

let originalString = "hello world playwright";
let convertedString = originalString.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-");

console.log(convertedString);

/*Q32. 
Replace all occurrences of: “test" 
with:”spec" 
in: "test-login.test.js has test data" */

let input ="test-login.test.js has test data";
let replaceinput = input.replaceAll("test" , "spec");
console.log(replaceinput);

/* Q33. 
Get all keys of:{ 
 Q33. 
Get all keys of:{ 
  name:"John", 
  age:25, 
  role:"QA", 
  tool:"Playwright" 
} 
as a comma-separated string. 
 */

let obj = { 
  name:"John", 
  age:25, 
  role:"QA", 
  tool:"Playwright" 
} 
 let keys = Object.keys(obj);
 console.log(keys);
 comaSepratedString = keys.join(", ");
 console.log(comaSepratedString);

 /*
 Q34. 
Get total marks from 
{ 
    math:85, 
    science:92, 
    english:78, 
    history:88 
} 
in one line.

 */

let obj2 ={
    math:85, 
    science:92, 
    english:78, 
    history:88 
} 
 const totalMarks = Object.values(obj2).reduce((sum, score) => sum + score, 0);
 console.log("Total Marks : " , totalMarks);

 /*Q35. 
Convert 
"name=John&role=QA&exp=3" 
into: 
{
   name:"John", 
   role:"QA", 
   exp:"3" 
}*/

let original = "name=John&role=QA&exp=3" ;

const intoObj = Object.fromEntries(new URLSearchParams(original));
console.log(intoObj);
