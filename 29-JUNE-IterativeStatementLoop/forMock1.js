
//  Print Largest Number from Array
/* let arry=[12 ,34 , 56, 79 ,23, 34, 68, 90];
let num1= arry[0];
for(i=1 ; i < arry.length ; i++){
    if(num1 < arry[i]){
        num1=arry[i];
    }

}console.log(num1);  */
console.log("------------------------------------------------");

//Print Smallest Number From Array
let arry2=[27 , 35, 38, 96, 64, 38 ,7,];
let num2 = arry2[0];
for(i=1 ; i < arry2.length ; i++){
    if(num2 > arry2[i]){
        num2 = arry2[i];
    }
}console.log("Smallest no. is = " , num2);

// Print Same no. from Array

let a1=[22 , 45, 67, 78, 66];
let a2 = [48 ,33 , 22, 66, 34];
let a3 =[];


for( j = 0 ; j <= a1.length ; j++){  
    console.log(a1.length);
    console.log(`${j} = ${a1[j]}`);
   
}console.log(a1[j]);

console.log("--------------------------------------");

// Print Even and odd from 1 to 10

for(let i =1 ; i <= 10 ; i++){
    if(i % 2 == 0){
        console.log(`${i} is Even No.`);
    }else{
        console.log(`${i} is Odd no.`);
    }
}
