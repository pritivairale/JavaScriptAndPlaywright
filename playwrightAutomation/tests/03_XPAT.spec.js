// 1. XPAT By Attribute
import{test , expect} from "@playwright/test";
test("01 XPAT By Attribute" , async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.locator('//span[@class="oxd-userdropdown-tab"]')).toBeVisible();
});




