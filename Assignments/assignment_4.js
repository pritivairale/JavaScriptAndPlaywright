
// Reverse String
function revString(str){
    let revstr = "";
    for(i = str.length-1 ; i >= 0 ; i-- ){
        revstr += str[i];

    } return revstr;
}
console.log(revString("Playwright"));
// -----------------------Using Method--------------------
str = "playwright";
rev = str.split("").reverse().join("");       
console.log(rev);        

console.log("===============================");

/*Q2. Check if String is Palindrome 
Write a function that checks whether a string reads the same forward and backward (case
insensitive). 
Input:"Madam" 
Output:true 
Input:"Playwright" 
Output: false */

console.log("====================================");

    let input = "madam"
    let rev1 = "";
    for(i = input.length-1 ; i >= 0 ; i--){
       rev1 += input[i];
    }
    if(input === rev1){
        console.log(`"${input}" : `,true);               
    } else{
        console.log(`"${input}" : `,false);                
    } 

console.log("========================================");    

/* Q3. Count Vowels in a String 
Count the number of vowels in the given string. 
Input:"JavaScript Automation" */

let text = "JavaScript Automation";
let vowels = "aeiouAEIOU";
let count =0;
for(char of text){
    if(vowels.includes(char)){
        count++;
    }
}console.log(count);

console.log("=========================================");

/* Q4. Find Duplicate Characters 
Find all characters that appear more than once. 
Input: "automation" 
Output: ["a","t","o"] */

let inputstr = "automation"; 
let repeatchar = [];
let nonrepeatchar = [];

for (let char of inputstr) {
       console.log(char);  // a u t o m a t i o n
    // If it's already in nonrepeatchar, it's a duplicate!
    if (nonrepeatchar.includes(char)) {
        //console.log(char);  // a t o
        //console.log(nonrepeatchar);  // [ 'a', 'u', 't', 'o', 'm', 'i' ]
        // Only push to repeatchar if we haven't already marked it as a duplicate
        if (!repeatchar.includes(char)) {
            repeatchar.push(char);
          //console.log(repeatchar)  
        }
    } else {
        // First time seeing this character
        nonrepeatchar.push(char);
        //console.log(nonrepeatchar)
    }
}

//console.log("Repeated:", repeatchar);       // Output: ["a", "t", "o"]

console.log("=========================================");


// Q12. Flatten a Nested Object
let user = { 
    name: "John", 
    address: { 
        city: "Mumbai", 
        pin: { 
            code: 400001, 
            area: "Andheri" 
        } 
    }, 
    role: "QA" 
}; 
console.log("name :",user.name);
console.log("city :",user.address.city);
console.log("pin :",user.address.pin.code);
console.log("area:",user.address.pin.area);
console.log("role :",user.role); 

/* Q:6 Count Frequency of Each Character 
Input: "hello world" 
Expected Output:{ 
  h:1, 
  e:1, 
  l:3, 
  o:2, 
  w:1, 
  r:1, 
  d:1 
} 
*/
let inputstr1 = "hello world";
let frequency = {};

for (let char of inputstr1) {
  if (char === " ") {
    continue;
  }

  if (frequency[char]) {
    frequency[char] += 1;
  } else {
    frequency[char] = 1;
  }
}

console.log(frequency);

console.log("======================================");

// Q:20

let str4 = "Hello-World-Test"; 
let arr = str4.split("-");

console.log(arr); // [ 'Hello', 'World', 'Test' ]

console.log(arr.join(" "));  //Hello World Test

console.log(arr.join(""));  //HelloWorldTest

console.log(typeof arr);

console.log(typeof str);

console.log(("=".repeat(50)));

//  Q19. Predict the Output 

let person = { 
    name: "Alice", 
    role: "QA", 
    exp: 3 
}; 
delete person.exp; 
console.log(person); 
console.log(Object.keys(person)); 
console.log(Object.values(person)); 
console.log(Object.entries(person));

console.log(("=".repeat(50)));

//Q18. Predict the Output

let obj1 = { 
    name: "John", 
    age: 25 
}; 
let obj2 = obj1; 
obj2.age = 30; 
console.log(obj1.age); 
console.log(obj2.age);

console.log(("=".repeat(50)));

//Q17. Predict the Output

let str5 = "JavaScript"; 
str5[0]="X";
console.log(str5); 
console.log( 
    str5.replace("Java","Type") 
); 
console.log(str5);

console.log(("=".repeat(50)));

//Q16. Predict the Output outl
let strr = "Hello World"; 
console.log(strr.slice(0,5)); 
console.log(strr.slice(-5)); 
console.log(strr.substring(6)); 
console.log(strr.substring(-1));