/*
// Reverse String

let str = "playwright";
let rev = "";
for(let i = str.length-1 ; i >= 0 ; i--){
    rev += str[i];
}console.log(rev);



// Palindrome

let str1 = "Madam";
let str = str1.toLocaleLowerCase();
let rev = "";
for(let i = str.length-1 ; i >= 0 ; i--){
    rev += str[i];
}console.log(rev);
if(str === rev){
    console.log(" String is Palindrom ");
}else{
    console.log(" String is not Palindrom");
}



// Reverse Numbers

let num = 12345
let num1 = num.toString();
let revNo = "";
for(let j = num1.length -1 ; j >=0 ; j--){
    revNo += num1[j];
} console.log(revNo);
let revNo1 = Number(revNo);
console.log(typeof revNo1);


// Acending Order

let a = [4,9,6,2];
for(let i = 0 ; i < a.length ; i++){
    for(let j = i+1 ; j< a.length ; j++){
        if(a[i] > a[j]){
            let store = a[i];
            a[i] = a[j];
            a[j] = store;
        }
    }
}console.log(a); 


// Desending Order

let a = [7,5,9,3,2];
for(let i = 0 ; i <= a.length ; i++){
    for(let j = i+1 ; j <= a.length ; j++){
        if(a[i] < a[j]){
            let store = a[i];
            a[i] = a[j];
            a[j] = store;
        }
    }
} console.log(a);
*/


//reverse string in function
function reverse(str){
    let rev = "";
      for(let i = str.length-1 ; i >=0 ; i--){
           rev += str[i];
      }console.log(rev);
      if(str === rev){
        console.log(" is palingrom");
      }else{
        console.log("not palindrom");
      }
    }      
reverse("madam");

console.log("------------------------");

//Reverse Number
let num = 12345;
let num1 = num.toString();
let revNo = "";
for(let i = num1.length-1 ; i >=0 ; i--){
       revNo += num1[i];
}
let no = Number(revNo); 
console.log(no);

console.log("--------------------")

//Asending array
let ary = [5,6,9,8,3];
for(let i = 0 ; i < ary.length ; i++ ){
     for(let j = i+1 ; j < ary.length ; j++){
        if(ary[i] > ary[j]){
            let store = ary[i];
            ary[i] = ary[j];
            ary[j] = store;
        }
     }
}console.log(ary);


console.log("---------------------------");

// Find largest no

let a = [2,4,6,8,1,10];
let com =a[0];
let large;
let sec;
for(let i = 0 ; i <= a.length-1 ; i++){
    if(a[i] > com){
        com = a[i];
        large = a[i];
    }  
}console.log(large);

console.log("------------------------");

for(let i=1 ; i <=5 ; i++){
     let line = "";
    for(let j=1 ; j <= i ; j++){
          line += "*";
    }console.log(line); 
}//console.log(line);               