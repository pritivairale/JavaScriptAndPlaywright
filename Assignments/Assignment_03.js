// Remove Duplicates

const originalArray=[1,2,3,2,4,3,5,1,6,5,4,7];

const uniqueArray = [...new Set(originalArray)];
console.log(uniqueArray);

console.log("-".repeat(50));

let arr=[1,2,3,4,5];
let result = arr.slice(1,4);
console.log(result);
console.log(arr);

console.log("-".repeat(50));            

let removed = arr.splice(2,1,10,20); //1,2,10,20,4,5
console.log(removed);
console.log(arr);

console.log("-".repeat(50));  

let nums = [10,5,8,1,3];
 console.log(nums.sort());  // [1,10,3,5,8]

 console.log("-".repeat(50));  
 
let a = [1,2,3]; 
let b = [1,2,3]; 
console.log(a === b);  // false
console.log(a == b); //false

 console.log("-".repeat(50)); 

let arr1 = [1,2,3,4,5]; 
let [x, , y, ...rest] = arr1; 
console.log(x); 
console.log(y); 
console.log(rest);

console.log("-".repeat(50));

// Largest Number

let secondLarge=[45, 89, 23, 89, 56, 12, 78, 34];         
let comp= secondLarge[0];

for(a=1; a < secondLarge.length; a++){
    if(secondLarge[a]>comp){
        comp=secondLarge[a]
    } 
}console.log("Large Number is =",comp);

// Second Largest Number

let serise=[45, 89, 23, 89, 56, 12, 78, 34];
let large = 0;
let secLarge = 0;
for(num = 0 ; num < serise.length-1 ; num++){
    let current = serise[num];
    if(current > large){
        secLarge = large;
        large = current;
    } else if(current > secLarge && current !== large){
        secLarge = current;
    }
} console.log("Second Large Number is =",secLarge);
console.log("Large Number is = ",large);

console.log("===========================================");
/*/ Q3. Reverse an Array 
Given: 
[1, 2, 3, 4, 5] 
Reverse the array without using reverse().*/

let orgnArray=[1,2,3,4,5];
let reverseArray =[];
for(no=orgnArray.length-1; no >= 0; no--){
    reverseArray.push(orgnArray[no]);

}console.log("Original Array is =",orgnArray);
console.log("Reverse Array is = ", reverseArray);

console.log("==============================================");

//Q4. Find Missing Number Given: [1, 2, 3, 5, 6, 7, 8] Find the missing number.

let setNo = [1,2,3,5,6,7,8,9,10];
let misNo=0;
for(k = 0 ; k < setNo.length-1 ; k++){
    if(setNo[k]+1!==setNo[k+1]){
    misNo=setNo[k]+1;

    }
}console.log(`Missing Number is = ${misNo}`); 

console.log("=".repeat(50));

/* Q6. Merge Two Sorted Arrays 
let arr1 = [1, 3, 5, 7, 9]; 
let arr2 = [2, 4, 6, 8, 10]; 
Merge both arrays into a sorted array without using sort(). */

let arr11 = [1, 3, 5, 7, 9]; 
let arr2 = [2, 4, 6, 8, 10]; 
let sortedArray = [];

for(i = 0 ; i < arr2.length ; i++){
    arr11.push(arr2[i]);
}

console.log("Mearge Array is :",arr11);
    
let array = arr11;

let n = array.length;
    
    // Loop through all array elements
    for (let i = 0; i < n; i++) {
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log("Sorted Array is :",array);

console.log("==========================================");    

// Move all 0 to last 
//let arr = [0, 1, 0, 3, 12, 0, 5, 0];

function moveZeroes(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the current element is non-zero, swap it
        if (nums[i] !== 0) {
            let temp = nums[insertPos];
            nums[insertPos] = nums[i];
            nums[i] = temp;
            
            insertPos++;
        }
    }
    return nums;
}console.log(moveZeroes([0, 1, 0, 3, 12, 0, 5, 0]));


/*  Q13. Count Frequency 
Given: 
["apple","banana","apple","orange","banana","apple","grape"] 
Find: 
• Frequency of each element 
• Most frequent element */
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];

function getFrequencyAndMax(arr) {
    let frequency = {};
    let mostFrequent = "";
    let maxCount = 0;

    // Loop through the array to count frequencies
    for (let item of arr) {
        // If the item exists, increment count; otherwise, set it to 1
        frequency[item] = (frequency[item] || 0) + 1;

        // Track the most frequent element on the fly
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }

    return {
        frequencyMap: frequency,
        mostFrequentElement: mostFrequent,
        highestFrequency: maxCount
    };
}

let resultis = getFrequencyAndMax(fruits);
console.log("Frequency of each element:", resultis.frequencyMap);
console.log(`Most frequent element: "${resultis.mostFrequentElement}" (appears ${resultis.highestFrequency} )times`);


console.log("===========================================");

/* Q1. Remove Duplicates 
Given array: 
[1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7] 
Remove duplicate values and return unique elements. 
Requirement: Solve using 3 different methods. */

// 1) Spread Operator (...)
let arrSet =[1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7] ;
let uniqueSet = [...new Set(arrSet)];

console.log("Using Spread Operator : ",uniqueSet); 

//2) filter() and indexOf()
 arrSet =[1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7] ;

let uniqueFilter = arrSet.filter((item, index) => arrSet.indexOf(item) === index);

console.log("Using filter() : ",uniqueFilter); 

//3) reduce()
 arrSet =[1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7];

let uniqueReduce = arrSet.reduce((acc, item) => {
    if (!acc.includes(item)) {
        acc.push(item);
    }
    return acc;
}, []);

console.log("Using reduce() : ",uniqueReduce); 

