import {test , expect} from "@playwright/test";
import loginData from "../TestData/loginData_22.json";

for(const data of loginData){
    test(`Login Test ${data.username}`, async ({page}) => {

       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       await page.getByPlaceholder("Username").fill(data.username);
       await page.getByPlaceholder("Password").fill(data.password);
       await page.getByRole("button", {name : "Login"}).click();



    // Valid Login

    if(data.expected === "Dashboard"){
        // Verify that Dashboard is displayed
        await expect(page.locator(".oxd-topbar-header-breadcrumb-module")).toBeVisible();
        console.log(`Login Successful: ${data.username} `);
    
    }  else {
        // Verify Invalid Credential message is displayed.
        await expect(page.getByText("Invalid credentials")).toBeVisible();
        console.log(`Login Failed as expected: ${data.username}`);
    }

}
    )};