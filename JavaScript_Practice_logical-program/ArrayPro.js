//Largest Number

let ary = [37 ,84,90,56,47,98];
let comp = ary[0];

for(let i = 0 ; i < ary.length ; i++){
    if(comp < ary[i]){
        comp = ary[i];
    }
}console.log("Largest No. is :" , comp);


console.log("==".repeat(30));

// Second Largest Number

let numbers = [37 , 78, 23, 54, 56, 90];
let comp1 = numbers[0];
let sec;
for( i =0 ; i < numbers.length ; i++){
    if(comp1 < numbers[i]){
        sec = comp1;
        comp1 = numbers[i];
     }else if (comp1 > sec){
        comp1 = sec;
    }
    
} console.log("Largest No is : ", copm1);

