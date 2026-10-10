import{test , expect} from "@playwright/test";
test("Window Handling - Single Child Window", async ({page}) => {
    console.log(" TEST STARTED ");
    // Step 1 - Open Parent Window
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    await expect(page.locator('//h1[@itemprop="name"]')).toHaveText("Window Handles Practice");
    console.log("Parent Page Titel : ", await page.title());
    console.log("Parent Page URL : ", await page.url());
    console.log("Total Windows Open : ", await page.context().pages().length);

    console.log("--------Open Child Window--------");

    // Handel Child Window
    const [childWindow] = await Promise.all([
               page.waitForEvent('popup'),
               page.locator('#newWindowBtn').click(),
      ]);

      console.log(" Child Window Open Successfully");
      console.log("Total Windows Open : ", await page.context().pages().length);

      console.log("Child Window URL : ",await childWindow.url());
      console.log("Child Window Title : ",await childWindow.title());

      await expect(childWindow.locator('//h1[@itemprop="name"]')).toHaveText("Basic Controls");

      await childWindow.locator("#firstName").fill("Bharti");

      await childWindow.close();
      console.log("-------Child Window Closed-------");
      console.log("Remaning Window : ", page.context().pages().length);


});

test.only(" Handle Multiple Windows " , async ({page}) => {
    test.setTimeout(60000);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const parentPage = page;

    // Get current Browser context
    const context = page.context();

    console.log("Parent page Title : " , await parentPage.title());
    console.log("Parent page URL :" , await parentPage.url());
    console.log("Total Window : ", context.pages().length);

    // Open LinkedIn Child Window
    const [linkedInPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]').click(),
     ]);

    await linkedInPage.waitForLoadState();
    console.log(" LinkedIn Page Open");
    console.log("LinkedIn Page Title : ", await linkedInPage.title());
    console.log("LindIn Page URL : ", await linkedInPage.url());
    
    console.log("------------------------------------------------");


    // Open Twitter Child Window
    const [twitterPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//a[@href="https://twitter.com/orangehrm?lang=en"]').click(),
     ]);

    await twitterPage.waitForLoadState();
    console.log(" Twitter Page Open");
    console.log(" Twitter Page Title : ", await twitterPage.title());
    console.log(" Twitter Page URL : ", await twitterPage.url());
    
    console.log("------------------------------------------------");

    // Open YouTube  Window
    const [youtubePage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//a[@href="https://www.youtube.com/c/OrangeHRMInc"]').click(),
     ]);

    await youtubePage.waitForLoadState();
    console.log(" youtube Page Open");
    console.log(" youtube Page Title : ", await youtubePage.title());
    console.log(" youtube Page URL : ", await youtubePage.url());
    
    console.log("------------------------------------------------");

    console.log("Total Open Windows : ", context.pages().length);
    
    // loop through all windows
    const pages = context.pages();

    for(let i = 0 ; i < pages.length; i++){
        console.log("---------------------------------");
        console.log(`Window ${i + 1}`);
        console.log("Tital : ",await pages[i].title());
        console.log("URL : ",await pages[i].url());

    }
     // Validate Child Windows
    await expect(linkedInPage).toHaveURL(/linkedin/);
    await expect(twitterPage).toHaveURL(/twitter/);
    await expect(youtubePage).toHaveURL(/youtube/);

    //Bring child window to front
    await linkedInPage.bringToFront();
    await page.waitForTimeout(2000);
    console.log("LinkedIn Window Focused");

    await twitterPage.bringToFront();
    await page.waitForTimeout(2000);
    console.log("twitterPage Window Focused");

    await youtubePage.bringToFront();
    await page.waitForTimeout(2000);
    console.log("youtubePage Window Focused");

    // Bring parent window to front
    await parentPage.bringToFront();
    console.log("Parent Window Focused");

    // Close YouTube Child Window
    console.log("Closing YouTube ");
    await youtubePage.close();
    console.log("You Tube Closed");

    //Verify remaining window
    console.log("Total Window After Closing YouTube : ", context.pages().length);


});