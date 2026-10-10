import {test , expect} from "@playwright/test";
import UserData from "../TestData/UserData.json";

// Parametrization using for loop

for(let i=0 ; i < UserData.length; i++){

    // A Separate test is created for every data set.
    test(`print usre data - ${i + 1}` , async() =>{
        // Access usrename and password using array index.
        console.log("Usernmae : ", UserData[i].username);
        console.log("Password : ", UserData[i].password);
    });
}

// Parametrization Using FOR....OF Loop
for(const data of UserData){
    test(`Print User Data - ${data.username}`,async() => {
        console.log("Usernmae : ", data.username);
        console.log("Password: ",data.password);
    });
}