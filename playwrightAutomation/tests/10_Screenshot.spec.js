/* Types of Screenshot
     1. page Screenshot
     2. Full page ScreenShot
     3. Element Screenshot
*/
import {test , expect} from "@playwright/test";
test(" page Screenshot" , async ({page}) => {
    await page.goto("https://www.meesho.com/ ");

    // capture currently visible page/viewport
    await page.screenshot({path : "Screenshots/MeeshoPage.png"});
});

test("Full Page Screenshot" , async ({page}) => {
    await page.goto("https://www.meesho.com/");

    await page.screenshot({path : "Screenshots/MeeshoFullPage.png" , fullPage : true });

    console.log(" Full page Screenshot capture successfully");
});

test.only(" Element Screenshot" , async ({page}) => {
    await page.goto("https://www.meesho.com/");
    const locat = await page.getByAltText("Home Decor");

    await locat.screenshot({ path: "Screenshots/MeeshoElementShot.png"})
});