import {test ,expect} from "@playwright/test";

test(" Handel Multiple Dropdown Using Values " , async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");


const animalDropDown = page.locator("#animals");
await animalDropDown.scrollIntoViewIfNeeded();
await page.waitForTimeout(3000);

// multiple value to select
let animal = ["cat" , "deer" , "lion"];

// select multiple option using values

await animalDropDown.selectOption(animal);
console.log("Multiple Optiond Selected Using Values");

//verify selected Options

const selectedAnimals = await animalDropDown.locator("option:checked").allTextContents();

console.log("Selected Animals : ", selectedAnimals);
});

test("Handel DropDown Using Labels" , async ({page}) => {
    await page.goto("https://qaautomationlabs.com/testing/dropdown.php");
    
    const countryDropDown = await page.getByTestId('dropdown-country-select');
    //await countryDropDown.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    let countryMul = [
        {label : "India" },
        {label : "Canada"},
        {label : "Australia"}

    ];
    await countryDropDown.selectOption(countryMul);
    console.log("Multiple Options Selected");

    const selectedCuntrys = await countryDropDown.locator("option:checked").allTextContents();
    console.log(selectedCuntrys);

});

test.only("Handle Auto Suggested DropDown", async ({page}) => {
    
    await page.goto("https://www.wikipedia.org/");

    await page.locator("#searchInput").fill("Cricket Word Cup");

    // Locate all suggested Options
    const suggestedOptions = page.locator(".suggestion-text");

    //wait until first siggestion is visible
    await expect(suggestedOptions.first()).toBeVisible();

    // get all suggestion texts
    const allResult = await suggestedOptions.allTextContents();
    console.log("Available Options :",allResult);

    // verify suggestions are available
    await expect(allResult.length).toBeGreaterThan(0);

    //===========Select Required Suggestion===============

    for(let i = 0 ; i < allResult.length ; i++)
    {
        // Remove extra Specec
        const suggestion = allResult[i].trim();
        console.log(`Checking : ${suggestion}`);

        //check whether suggestion contain required text
        if(suggestion.toLowerCase().includes("cricket world cup")){
            console.log(`Match Found : ${suggestion}`);

            // click matching suggestion
            await suggestedOptions.nth(i).click();
            break;

            // stop loop after finding the requred option
        
        } 
    }

});


