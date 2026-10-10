import {test , expect } from '@playwright/test';
test("Copy Peast keyboard Actions " ,async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const input = await page.locator('//input[@name="username"]').fill("admin");
    const secinput = await page.locator('//input[@type="password"]');
     await input.press("Control+A");
     await input.press("Control+C");
     await secinput.press("Control+V");
     await page.waitForTimeout(3000);

});