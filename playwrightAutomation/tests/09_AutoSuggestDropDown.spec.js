import{test , expect}from "@playwright/test";
import { count } from "node:console";
test("Handel Auto Suggest Dropdown",async ({page}) => {

    await page.goto("https://www.amazon.in/");

    // wait until DOM content is loaded
    //await page.waitForLoadState("domcontentloaded");

    await page.locator('#twotabsearchtextbox').fill("Toys");

    // loacate all auto-suggestion options
    const suggestedOptions =await page.locator('//div[@role="button"]/span');

    //wait until first suggestion is visible

    await expect(suggestedOptions.first()).toBeVisible();

    //count total Suggestions
    const totalSuggetion = await suggestedOptions.count();
    console.log("Total Suggestions Are: ",totalSuggetion);


    //verify suggestions are available
     await expect(totalSuggetion).toBeGreaterThan(0);

    // Print all Suggetions
    

    for(let i = 0; i < totalSuggetion ; i++){
        // get Suggestion text
        const text = await suggestedOptions.nth(i).textContent();

        // Remove extra spaces
        const suggestText = text ? text.trim() :"";
        console.log(`${i + 1} : ${suggestText}`);
    }

    let matchFound = false;
    for(let i = 0 ; i < totalSuggetion; i++){
        //get current suggetion text 
        const text = await suggestedOptions.nth(i).textContent();

        //remove extra spaces
        const suggestedText = text ? text.trim() : "";
        console.log(`Checking : ${suggestedText}`);

        //Check whether suggestion contains required text

        if(suggestedText.toLowerCase().includes("toys for boys 7-14 years")){
            console.log("Match Found :",suggestedText);

            //click matching suggetion
            await suggestedOptions.nth(i).click();

            //update match status
            matchFound = true;

           //Stop loop after finding the match
           break;
        }
    }

});