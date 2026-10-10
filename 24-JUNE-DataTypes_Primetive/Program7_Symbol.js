// Symbol
// Symbol creates a unique value.
// Even if two symbols have the same description, they are always different.

let a = (Symbol("Hii")); //------ This is Unique value
let b = (Symbol("Hii")); //------ This is also Unique value

console.log(a==b);  // false
console.log(a===b); //false
console.log(typeof a); // Symbol 
console.log(typeof b); // Symbol

//---- Using String Comparistion-----

let a1 = "Hii";
let b1 = "Hii";

console.log(a1==b1); //true
console.log(a1===b1); //true

console.log(typeof a1); // String
console.log(typeof b1); //String


