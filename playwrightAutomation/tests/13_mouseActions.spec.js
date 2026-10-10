// Mouce Actions 
/* 1) Right Click
   2) Double Click
   3) MouceOver  */

import{test , expect} from '@playwright/test'  ;
 
test(" Right Click Mouce Action" , async ({page}) => {
    await page.goto("https://vinothqaacademy.com/mouse-event/");

    await page.locator("#rightBtn").click({button : "right"});
    await page.locator('//button[@data-action="Copy"]').click();
    const status = await page.locator("#rightStatus").textContent();
    console.log(status);
    await expect(page.locator("#rightStatus")).toHaveText("Selected: Copy ✅");

});

test(" Double Click " , async ({page}) => {
    await page.goto("https://vinothqaacademy.com/mouse-event/");
    await page.locator("#doubleBtn").dblclick();
    await page.waitForTimeout(3000);
    const dblstatus = await page.locator("#doubleStatus").textContent();
    console.log(dblstatus);
    await expect(page.locator("#doubleStatus")).toHaveText("Double Click Detected ✅");
});

test(" Mouse Over" , async ({page}) => {
    await page.goto("https://www.amazon.in/");
    const mouseOver = await page.locator("#nav-link-accountList");
    await mouseOver.hover();
    await expect(mouseOver).toBeVisible();

    await page.locator("#nav_prefetch_yourorders").click();
    await page.waitForTimeout(2000);
});

test(" Drag and Drop" , async ({page}) => {
    await page.goto("https://vinothqaacademy.com/mouse-event/");
    const source = await page.locator("#dragItem");
    const target = await page.locator("#dropZone");
    await source.dragTo(target);
    await page.waitForTimeout(3000);

    await page.locator("#resetBtn").click();

});
