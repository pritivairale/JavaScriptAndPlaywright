import {test , expect} from '@playwright/test';

test("TC001 Open Page", async ({page}) => {
    await page.waitForTimeout(5000);
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.waitForTimeout(5000);

});

test.only("TC002 Compleate Navigation Flow " , async({page}) => {
    test.setTimeout(60000); 
    await page.goto("https://demo.automationtesting.in/Register.html");
    console.log("Step 1 - Open Page" +page.url());
    const pageTitle = await page.title();
    console.log("Page Title is = " + pageTitle);
    await expect(page).toHaveTitle(pageTitle);
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html");
    console.log("Page Opened Successfully. Title and URL verified.");
    await page.waitForTimeout(3000);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Step1- Open Page",page.url());
    await page.waitForTimeout(3000);
    const orangeTitle = await page.title();
    console.log("OrangeHRM page Title : "+orangeTitle);
    await expect(page).toHaveTitle(orangeTitle);
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);

    await page.goBack({ waitUntil: 'domcontentloaded' });
    console.log("Navigate Back to AutomationTesting page");
    await page.waitForTimeout(3000);
    // verify privious page after navigating back
    await expect(page).toHaveTitle(pageTitle);
    await page.waitForTimeout(3000);

    await page.goForward();
    console.log("Navigate to OrangeHRM page");
    await page.waitForTimeout(3000);
    // verify OrangeHRM page after navigation
    await expect(page).toHaveTitle(orangeTitle);

    await page.reload();
    console.log("Reload the Current Page");
    await page.waitForTimeout(3000);
    console.log("Nevigation Flow Completed Successfully");

});

