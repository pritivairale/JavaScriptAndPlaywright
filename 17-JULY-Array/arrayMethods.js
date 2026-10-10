// Important Array Methods

let group=["A","B","C","D","E"];

/* 1) push() 
Add One or More element to the end of the array.
*/
group.push("F");
group.push("G","H");
console.log(group);

console.log("-------------------------------------");

// 2) pop()
//  Remove element from the end of the array.

group.pop("H");
//group.pop("G","H"); Remove Only Last element
console.log(group);

console.log("-----------------------------------------");

// 3) shift()
// Remove Only first element
let removeEle = group.shift();
console.log(removeEle);   // A
console.log(group);

console.log("---------------------------------------");

// 4) unshift()
//  Add One or More elements to the Beginning.
group.unshift("A","K");
console.log(group);

console.log("------------------------------------------");


/* 5) splice()
===================
Add / Remove / Replace at any Position
syntax: 
arryName.splice(startIndex , deleateCount , item1 , item2 ,....);
examlpe:  */
let group2 = ["cat","bat","mat","rat"];
console.log(group2);

// Remove Elements
let remove = group2.splice(1 , 2 ); //remove 2 elements form index 1
console.log("Removed Element is :" , remove); // bat , mat
console.log(group2);


console.log("---------------------------");

// Add Elements without Removing anything
group2.splice(1,0,"bat","mat");   // Add elements to index 1
console.log(group2);

console.log("----------------------------");

// Replace One Element
group2.splice(0,1,"sat");  // replace index[0]=cat to sat
console.log(group2);


// 6) slice()
/* =============
Extract a Portion of an Array
syntax: 
arrayName.slice(starIndex , endIndex);
startIndex ---> Included
endIndex ---> Not Included  */

// +Index    0      1     2     3     4     5     6
let letters=["a" , "b" , "c" , "d" , "e" , "f" , "g"];
// -Index    -7    -6    -5    -4    -3     -2    -1

console.log( letters);
console.log("--------------------------");

// Extract index 1 to 3
let subSet = letters.slice(1 , 4);
console.log(subSet);
console.log(letters);

// Extract indext 1 to 2
let subSet2 = letters.slice(1 , 3);
console.log(subSet2);
console.log(letters);

// Copy the Complete Array
let subSet3 = letters.slice(0);  // Copy Complete Array
console.log(subSet3);

// Using Negative Index
let lastTwo = letters.slice(-2);
console.log(lastTwo);

let middle = letters.slice(-4 , -2);
console.log(middle);

// 7) join()
//=============== 
// Convert Array into String
let store = ["order", "cart", "price","quantity"];
console.log(store);
console.log(store.join("/"));  //Its join with /

// 8) concat()
//==================
// for Merge Arrays
let array1=["jay","raj","mahi","ruha"];
let array2=["jkk","jone","bob"];
let array3=["123","443","878","867"];

let concatArray = array1.concat(array2);
console.log(concatArray);

let allArray=array2.concat(array1,array3);
console.log(allArray);

// 9) reverse() 
//===================
// reverse an array
array3.reverse();
console.log(array3);

// 10) sort
//====================
array1.sort();    //Alphabetically sort
console.log(array1);
array3.sort();
console.log(array3); 

// 11) includes()
//======================
// Check if an elements Exists.
let supportedBrowsers=["Chrome","Firefox","Edge","Safari"];
console.log(supportedBrowsers.includes("Chrome")); // true
console.log(supportedBrowsers.includes("Webkit")); //false

// 12) indexOf()
//=====================
// Find First Index of an element
let logs = ["info","warn","error","info","error","info","error"];

console.log(logs.indexOf("error")); // 2
console.log(logs.indexOf("debug")); // -1
console.log(logs.indexOf("error",3)); // 4

// 13) lastIndexOf()
//==========================
//Find Last Index of an element
console.log(logs.lastIndexOf("error")); //6
console.log(logs.lastIndexOf("info")); //5

// 14) at()
//============================
// Access element using Positive and Negative index

console.log(logs.at(0));  //info
console.log(logs.at(-1)); //error
console.log(logs.at(4));  //error


