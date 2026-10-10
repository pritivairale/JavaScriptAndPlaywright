const newMap = new Map();
// set() : used to add keys and values

newMap.set("name" , "Bharti");
newMap.set("age" , 30);
newMap.set("id" , "id121");

console.log(newMap);
console.log(typeof(newMap));
// Update values
newMap.set("age",32);
console.log(newMap);

// get() : used to read values
// get() is used to retrieve the value associated with a key.

console.log("Name : ", newMap.get("name"));

// If the key does not exist, get() returns undefined.
console.log("city : " , newMap.get("city")); // city key is not present in map it return undefine

// has() : used to check wheter the specified key exists in the Map
// it returns in boolean true and false
 
console.log("Has Name : " , newMap.has("name"));

// Access key using the value
let searchValue = "Bharti";

for (let [key, value] of newMap) {
    if (value === searchValue) {
        console.log("Key of Bharti :" , key);
        console.log("Value of Name :" ,value);
    }
}

// size 
// size is  a Property , not method
 
console.log(newMap.size);

console.log("=".repeat(20));

// values() - get all values
console.log("All Values : ");

for(let value of newMap.values()){
    console.log(value);
}

console.log("=".repeat(20));

// keys() - get all keys

console.log("All Keys are :");
for(let key of newMap.keys()){
    console.log(key);
}

console.log("=".repeat(20));

// entries() - get both key and value pair
console.log("All keys and Values are:");
for(let [key , value] of newMap.entries()){
    console.log(`${key} : ${value}`);
}

console.log("=".repeat(20));

// delete() - Remove a key and value pair
//  syntax : map.deleate(key);
// it return true and false

console.log(newMap.delete("age"));     // true

console.log("After Deleate key : ", newMap );

console.log(newMap.delete("city")) // false // key was not Found

// clear() : remove all key-value pairs from the map

newMap.clear();
console.log("Clear Map : " , newMap);

//=======================================================================

// Map Keys can be Different DataType

/* Sring key
   Number key
   Boolean Key
   Object Key
   Array Key
*/ 

const mixedMap = new Map();

mixedMap.set("name" , "Bharti");
mixedMap.set(101 , "Employee");
mixedMap.set(true , "Active");

console.log("Mixed Map : " , mixedMap);

console.log(mixedMap.get("name"));
console.log(mixedMap.get(101));
console.log(mixedMap.get(true));

//=============================================

// Map with Object as key
// unlike normal JavaScript objects, Map allows object to be used directly as keys.

const user = {
    id : 1 ,
    name : "Bharti"
};

const userMap = new Map();
 userMap.set(user , "Active");

 console.log(userMap);
 