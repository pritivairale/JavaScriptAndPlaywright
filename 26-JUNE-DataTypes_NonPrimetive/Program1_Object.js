// Object is collection of related data stored as key-value pairs.
// Each pice of data has:
//      Key (Property Name)
//      Value (Property Value)

let employee = { empName : "Jay",
    lastname : "Raj",
    id : 1,
    salary : 50000,

};
console.log(employee);
console.log(typeof employee);

// Dot Notation
console.log(employee.empName);
console.log(employee.lastname);


// Bracket Notation
console.log(employee["empName"]);
console.log(employee["salary"]);

// Update Object Property
employee.salary=90000;
console.log(employee)

// Add New Property
employee.city="Pune";
console.log(employee);

// Delete Property
delete employee.id;
console.log(employee);

console.log("-------------------------------")
 
// for const variable
const person = {name : "Jhon", age : 25};
person.age = 30;
console.log(person);  //we can update values

//person = {name : "jani"};  // we can not reassing //TypeError
//console.log(person);

 
console.log("==============================");
//Static Methods of Object
/*  1.Object.keys();     returns all keys
    2.Object.values();    returns all values
    3.Object.entries();    returns both keys and values  */

    const emp = {name : "bharti" , id : "id001" , salary : "50000"};
    console.log(Object.keys(emp));

    console.log(Object.values(emp));

    console.log(Object.entries(emp));