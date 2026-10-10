/* We can Create String using 3 ways
1) Single Quates(' ')
2) Double Quates(" ")
3) Backticks(` `) */

// Double Quates

let msg="Hi";
console.log(msg);
console.log(typeof msg);

//  Single Quates

let name='Jone';
console.log(name);
console.log(typeof name);

//  Backticks

let lastname=`Welson`;
console.log(lastname);
console.log(typeof lastname);

//We can use Backticks for multiline String.
let line1=`This is line no. 1
This is line no. 2`;
console.log(line1);
console.log(typeof line1);

//---------String Concantination-----------

// Using + operator (old way)
console.log(msg +" "+ name +" "+ lastname);


//Template Literals (Backticks) (Modern Way)

let modernWay=(`${msg} ${name} ${lastname}`);
console.log(modernWay);

let v1="java";
let v2="script";
console.log(`This is ${v1} ${v2}`);










/*let employee={id:1,
    Name:"Bharti",
    Salary:50000,
    Post:"Software Eng"

};
console.log(typeof employee);
console.log(employee);
console.log(employee.Name);*/