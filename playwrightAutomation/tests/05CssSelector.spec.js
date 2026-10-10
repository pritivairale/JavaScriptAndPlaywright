// CSS Selector (CSS : Cascading Style Sheet)
/*         CSS Selector Types
//1. By ID
// Syntax: #idValue
// Example: #user-name

// 2. TagName with ID
// Syntax: tagName#idValue
// Example: input#user-name

// 3. Attribute Selector
// Syntax: [attributeName="attributeValue"]
// Example: [data-test="username"]
name
// 4. TagName with Attribute Selector
// Syntax: tagName[attributeName="attributeValue"]
// Example: input[data-test="username"]

// 5. Class Selector
// Syntax: .classValue
// Example: .input_error 

*/


import{test , expect , selectors} from "@playwright/test"; 
// username = standard_user
// password = secret_sauce
const baseURL = "https://www.saucedemo.com/"

test(" 01 Css Selector with #idValue " , async ({page}) =>{

    await page.goto(baseURL);
    // Syntax: #idValue
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);
});

test(" 02 Css Selector By TagName with IdValue" , async({page}) => {
    await page.goto(baseURL);
    // Syntax: tagName#idValue
    await page.locator('input#user-name').fill("standard_user");
    await page.locator('input#password').fill("secret_sauce");
    await page.locator('input#login-button').click();

    await page.waitForTimeout(3000);
});

test(" 03 Css Selector by Attribute Selector" , async ({page}) => {
    await page.goto(baseURL);
    // Syntax: [attributeName="attributeValue"]
    await page.locator('[id = "user-name"]').fill("standard_user");
    await page.locator('[id = "password"]').fill("secret_sauce");
    await page.waitForTimeout(3000);
    await page.locator('[id = "login-button"]').click();

});

test(" 04 Css TagName with AttributeName and Value" , async ({page}) => {

    await page.goto(baseURL);
    // Syntax: tagName[attributeName="attributeValue"]
    await page.locator('input[id = "user-name"]').fill("standard_user");
    await page.locator('input[id = "password"]').fill("secret_sauce");
    await page.waitForTimeout(3000);
    await page.locator('input[id = "login-button"]').click();

});

test.only(" 05 Css By .classValue" , async ({page}) => {

    await page.goto(baseURL);
    // Syntax: .classValue
    await page.locator('.input_error').first().fill("standard_user");
    await page.locator('.input_error').last().fill("secret_sauce");
    await page.waitForTimeout(3000);
    await page.locator('.submit-button.btn_action').click();

});
