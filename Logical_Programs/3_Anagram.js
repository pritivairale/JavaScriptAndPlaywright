let str1="race";
let str2="care"
let arr1=str1.split("");
let arr2=str2.split("");
if(arr1.length!==arr2.length){
  console.log("strings are not anagram")
}
else if(arr1.sort().join()==arr2.sort().join()){
  console.log("Strings are anagram");

}


let num=153; //1+125+27
let sum=0;
let temp=num;
while(num>0){
  let digit=num%10 //153%10 15%10
  sum=sum+digit*digit*digit; //0+1,5
  num=Math.floor(num/10)
}
console.log(sum)
if(temp==sum){
  console.log("number is anagram")
  
}
else{
  console.log("number is not anagram")
}