// Alerts Type of Alerts
/*  1) Simple Alerts
    2) Conformation Alerts
    3)Prompt Alerts */

import{test , expect} from "@playwright/test";

const BASE_URL ="https://testpages.eviltester.com/pages/basics/alerts-javascript/";

test("Handle Simple Alerts " , async ({page})=> {
    await page.goto(BASE_URL);

//register Dialog event befor clicking the button

page.on("dialog", async(dialog) =>{

    // Get dialog type
    console.log("Dialog Type : ",dialog.type());

    // Get dialog Message
    const alertmessage = dialog.message();
    console.log("Dialog Message : ",alertmessage);

    // Validate alert message
    await expect(alertmessage).toBe("I am an alert box!");

    //Accept the alert
    await dialog.accept();
});
// Click the button that opens JavaScript Alerts

await page.getByRole( "button" , {name : "Show alert box"}).click();

// Validate result after accepting alert 
await expect(page.locator("#alertexplanation")).toHaveText("You triggered and handled the alert dialog");
 
console.log("Simple Alert Handled Successfully");

});

// 2. Conformation Alert (OK , CANCEL)
//=============================================

test.only("Handel Conformation Alert - CANCEL" , async ({page}) => {
    await page.goto(BASE_URL);
    page.on("dialog" , async(dialog) => {

        console.log("Dialog Type : ", dialog.type());
        const alertMessage1 = dialog.message();
        console.log("Message :", alertMessage1);
        await expect(alertMessage1).toBe("I am a confirm alert");

        // Click Cancel
        await dialog.dismiss();
     }); 

     // Click Confirm Button
     await page.getByRole("button", {name : "Show confirm box"}).click();

     await expect(page.locator("#confirmreturn")).toHaveText("false");
    await expect(page.locator("#confirmexplanation")).toHaveText("You clicked Cancel, confirm returned false.");

});

test("Handel Confirm Alert - OK ",async ({page}) => {
    await page.goto(BASE_URL);
    page.on("dialog",async(dialog) => {
        console.log("Dialog Type : ", dialog.type());
        console.log("Dialog Message : ", dialog.message());
        await dialog.accept();
    });

    await page.getByRole("button",{name : "Show confirm box"}).click();
    await expect(page.locator("#confirmreturn")).toHaveText("true");
    await expect(page.locator("//p[@id='confirmexplanation']")).toContainText("You clicked OK, confirm returned ");
});

//=======================================================================
// 3. Prompt Alert
test("Handel Prompt Alert", async ({page}) => {

    await page.goto(BASE_URL);

    page.on("dialog" , async(dialog) => {
        console.log("Dialog Type : ", dialog.type());
        const promptMessage = dialog.message();
        console.log("Dialog Message : ", promptMessage);
        await expect(promptMessage).toBe("I prompt you");

        //Enter text and click OK
        await dialog.accept("Playwrite Testing");
        
    });
    //Click Prompt Button
    await page.locator("#promptexample").click();

    //validate enterd Text
    await expect(page.locator("#promptreturn")).toHaveText("Playwrite Testing");
    
});

test("Handel Bacic Authentication", async ({page}) => {
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    
   await expect(page.getByRole("heading",{name : "Basic Auth"})).toBeVisible();
});