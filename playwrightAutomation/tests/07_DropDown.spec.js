// Static Dropdown Handling
/* 1. Select By Value
   2. Select By Label 
   3. Select By Index
   4. Count Dropdown Options
   5. Print All Dropdown Optinos
  */
 
   import{ test , expect} from "@playwright/test";
   test(" Handel Static Dropdown ", async ({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    const ColorDropDown = page.locator("#oldSelectMenu");
    await ColorDropDown.scrollIntoViewIfNeeded();
    await expect(ColorDropDown).toBeVisible();
   //Select By Value
    await ColorDropDown.selectOption("4");
    console.log("Select By Value : Purpule");

    await ColorDropDown.selectOption("6");
    console.log("Select By Value : White");

    await expect(ColorDropDown).toHaveValue("6");
 });


 test(" DropDown Using Select By Label", async ({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    const ColorDropDown = await page.locator("#oldSelectMenu");
    await ColorDropDown.selectOption({label : "Indigo"});
    await ColorDropDown.selectOption({label : "Magenta"});
    await page.waitForTimeout(3000);
 });

 test("DropDown Using Select By Index" , async ({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    const ColorDropDown = await page.locator("#oldSelectMenu");
    await ColorDropDown.selectOption({index : 4 });
    await ColorDropDown.selectOption({index : 0 });
    await page.waitForTimeout(3000);

    // Xpath For Total Options and Store in Variable(TotalOptions)
    const TotalOptions = await page.locator('//select[@id="oldSelectMenu"]/option');

     //Count Total Options
     const optionCount = await TotalOptions.count();
     console.log(" Total Options are : " , optionCount);

     // Print all DropDown Options
     for(let i=0 ; i<optionCount ; i++){

        //get option text using nth()
        const optionText = await TotalOptions.nth(i).textContent();

        //Remove unnecessary space
        const cleanText = optionText ? optionText.trim() : "";

        console.log(`Option ${i + 1} : ${cleanText}`);
     }

 });

 