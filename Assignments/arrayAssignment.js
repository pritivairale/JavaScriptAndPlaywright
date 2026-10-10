
//Q5. Find Duplicate Elements Given: [1, 2, 3, 2, 4, 5, 3, 6, 1, 7, 5] 
//Return all duplicate elements.

let arr = [1, 2, 3, 2, 4, 5, 3, 6, 1, 7, 5]; 
let duplicates = [];
//let unique = [];

// Find Duplicates

for (let i = 0; i < arr.length; i++) {
if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
if (!duplicates.includes(arr[i])) {

duplicates.push(arr[i]);

}
}
}console.log(`Duplicates Elements are : ${duplicates}`);

console.log("======================================")
/* Q8. Flatten Nested Array 
Given: 
[1, [2, 3], [4, [5, 6]], [[7, 8, [9]]]] 
Convert into: 
[1,2,3,4,5,6,7,8,9] */

function flattenArray(nestedArray){
    let returnArray = [];
  for(let i = 0 ; i < nestedArray.length ; i++){
    if(Array.isArray(nestedArray[i])){
     returnArray.push(...flattenArray(nestedArray[i])); 
    }else{
        returnArray.push(nestedArray[i]);
    }
  }
     return returnArray;
}

let narray=[1,[2, 3],[4,[5,6]],[[7,8,[9]]]];
console.log(flattenArray(narray));

console.log("====================================");

/* Section D: One-Liner Challenges 
Q31.
Find sum of all numbers. 
[10,20,30,40,50]  */

//find maxinum

let set=[5,3,8,1,9,2];
let maxno = Math.max(...(set));
console.log(maxno)

//Remove all falsy values. 
//[0,1,"",null,2,undefined,3,false,NaN]

const originalArray=[0, 1, "", null, 2, undefined, 3, false, NaN];
const filtrArray=originalArray.filter(Boolean);
console.log(filtrArray);

// Get unique values. 
//[1,1,2,2,3,3,4,4]
const originalArray1 =[1,1,2,2,3,3,4,4];

const uniqueArray = [...new Set(originalArray1)];

console.log(uniqueArray); 

//Create an array containing numbers from 1 to 20.
const numbers = Array.from({ length: 20 }, (_, index) => index + 1);
console.log(numbers);