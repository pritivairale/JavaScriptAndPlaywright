/* let arr = [10, 20, 30, 20, 40, 30, 50, 10];

let duplicates = [];
let unique = [];

// Find Duplicates

for (let i = 0; i < arr.length; i++) {
if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
if (!duplicates.includes(arr[i])) {

duplicates.push(arr[i]);

}
}
}

// Find Unique Values

for (let i = 0; i < arr.length; i++) {
if (!unique.includes(arr[i])) {
unique.push(arr[i]);

}
}

console.log("Duplicate Values:", duplicates);
console.log("Unique Values:", unique); */


/*let arry= [23,56,78,56,23,89];
let dupli=[];
let unique=[];

for(i=0; i<arry.length; i++){
    for(j=i+1; j<arry.length;j++){
        if(arry[i]===arry[j]){
         dupli.push(arry[j]);
        }
         if(arry[i]!==arry[j]){
            unique.push(arry[j]);

        }
    }
}console.log(dupli);
console.log(unique); */

console.log("-".repeat(50));

let arry1 = [23, 56, 78, 56, 23, 89];

 
let dupli = [];
let unique = [];

for (let i = 0; i < arry1.length; i++) {

let count = 0;

for (let j = 0; j < arry1.length; j++) {
if (arry1[i] === arry1[j]) {
count++;
}

}
if (count > 1) {
if (!dupli.includes(arry1[i])) {
dupli.push(arry1[i]);
}

} else {
unique.push(arry1[i]);
}
}
 
console.log("Duplicate Values:", dupli);
console.log("Unique Values:", unique);

console.log("-".repeat(50));

/*let finalArray=[23,56,89,34,23,89];
//let same=[];
let unq=[];
let count = 0;

for(a=0; a<finalArray.length;a++){
    
    for(b=a+1; b<finalArray.length;b++){

       if(finalArray[b]===finalArray[a]) {
        count++;
       }
       if(count===1){
        unq.push(finalArray[a]);
       }
    }
      

    
}console.log(unq);*/


