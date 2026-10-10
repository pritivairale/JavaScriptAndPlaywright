import {test , expect} from '@playwright/test';

test("TC001 Page Checking", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM"); 
});

test("TC002 Home Page Test", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle(pageTitle);
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

test.only("TC003 Dashbord Check", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let pageTitle1 = await page.title();
    console.log(pageTitle1);
    await expect(page).toHaveTitle(pageTitle1);
    await page.waitForTimeout(5000);
});

