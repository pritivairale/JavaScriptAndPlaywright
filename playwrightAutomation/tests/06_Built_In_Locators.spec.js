// Built_In_Locators
// 1. getByRole
// syntsx: page.getByRole("role",{name : "AccessibleName"});
//      1.textbox

import {test , expect } from "@playwright/test";

test("01 getByRole with Textbox" , async ({page}) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.getByRole("textbox",{name : "First Name"}).fill("Bharti");
  await page.getByRole("textbox",{name : "Last Name"}).fill("Vairale");

});

test("02 getByRole with Button" , async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole("textbox", {name : "Username"}).fill("Admin");
    await page.getByRole("textbox",{name : "Password"}).fill("admin123");
    await page.getByRole("button",{name : "Login"}).click();
    await expect(page.getByRole("heading",{name : "Dashboard"})).toBeVisible();
});

test("03 getByRole with Link" , async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole("textbox", {name : "Username"}).fill("Admin");
    await page.getByRole("textbox",{name : "Password"}).fill("admin123");
    await page.getByRole("button",{name : "Login"}).click();
    await page.getByRole("link",{name : "PIM"}).click();
    //verify PIM heading
    await expect(page.getByRole("heading",{name : "PIM"})).toBeVisible();
    await page.waitForTimeout(3000);
});

test("04 getByRole with Checkbox and Radio Button" , async ({page}) => {
await page.goto("https://demo.automationtesting.in/Register.html");
await page.getByRole("radio",{name : "FeMale"}).check();
await page.waitForTimeout(3000);
//await page.getByRole("checkbox",{name : "Cricket"}).check();
//await page.waitForTimeout(3000);
});

test("05 getByRole with Checkbox and Radio Button" , async ({page}) => {
await page.goto("https://practice.expandtesting.com/checkboxes");
//await page.getByRole("radio",{name : "FeMale"}).check();
await page.waitForTimeout(3000);
await page.getByRole("checkbox",{name : " Checkbox 2"}).check();
//await page.waitForTimeout(3000);
});


// 2. getByLabel

test(" 002 getByLabel" , async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel("Username").fill("tomsmith");
    await page.getByLabel("Password").fill("SuperSecretPassword!");
    await page.getByRole('button',{name : "Login"}).click();
    await expect(page.locator("#flash")).toBeVisible();
});

// 3. getByText
// usefull for 
/*
Links
Buttons
Labels
Massages
Heading
Other Visible text 
*/
test("003 getByText" , async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByText("Forgot your password? ").click();
    await page.waitForTimeout(3000);
});

// 4. getByPlaceholder

test("004 getByPlaceholder" , async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button",{name : "Login"}).click();
});

// 5. getByAltText()

test("005 getByAltText" , async ({page}) => {
    await page.goto("https://playwright.dev/");
    const logo = await page.getByAltText("Playwright logo").first();
    await expect(logo).toBeVisible();

});

// 6. getByTestID
// syntsx: getByTestId("data-testid Value")

test("006 getByTestID", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId("username").fill("standard_user");
    await page.getByTestId("password").fill("secret_sauce");
    await page.getByTestId("login-button").click();
    await expect(page.locator(".title")).toHaveText("Products");
});

// 7. getByTitle