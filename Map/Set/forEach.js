// forEach()

// Array forEach()
const fruits = ["Apple" , "Orange" ,"Banana"];

fruits.forEach((fruit , index) => {
    console.log(`${index} : ${fruit}`);

});

console.log("==========================");
// Map forEach()
// Map forEach() provides value first and key second.

const emp = new Map();
emp.set("name" , "Bharti");
emp.set("Id" , 1);
emp.set("Role" , "QA");

emp.forEach((value , key) =>{
    console.log(`${key} : ${value}`);
});
