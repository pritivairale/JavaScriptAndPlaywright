import {test , expect} from "@playwright/test";
import user from "../TestData/OrangeHRM_Login.json";

test("Login Test" , async () => {
    //Read data from orangeHRM_login.json file

    console.log("Username : ", user.username);
    console.log("Password : ", user.password);
    console.log("Email : ", user.email);

    //Verify 
    expect(user.username).toBeTruthy();
    expect(user.password).toBeTruthy();
    expect(user.email).toBeTruthy();
    
});