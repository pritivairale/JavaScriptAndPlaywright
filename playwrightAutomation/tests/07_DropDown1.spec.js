import{test , expect}from "@playwright/test";
test("Handle DropDown" , async({page}) => {
    console.log("=================Test Started====================");

    await page.goto("https://demo.automationtesting.in/Register.html");
    console.log("Application Open");
    const yearDropDown = page.locator("#yearbox");
    const monthDropDown = page.getByPlaceholder("Month");
    const dayDropDown = page.locator("#daybox");

    //-----Validate Dropdown Visibility---------

    await yearDropDown.scrollIntoViewIfNeeded();

    await expect(yearDropDown).toBeVisible();
    await expect(monthDropDown).toBeVisible();
    await expect(dayDropDown).toBeVisible();
    console.log("All DropDowns are Visible");

    //-----Print Available Year Option------
    const yearOptions = await yearDropDown.locator("option").allTextContents();
    console.log("Available Years : ", yearOptions);
    console.log("Total Years : ", yearOptions.length);
    console.log("--".repeat(25));

    //-----Print Available Month Options-----
    const monthOptions = await monthDropDown.locator("option").allTextContents();
    console.log("Available Months : ", monthOptions);
    console.log("Total Months : ", monthOptions.length);
    console.log("--".repeat(25));

    //-----Print Available Day Options-----
    const dayOptions = await dayDropDown.locator("option").allTextContents();
    console.log("Available Days : ", dayOptions);
    console.log("Total Days : ", dayOptions.length);
    console.log("--".repeat(25));

    //-----------Select Values-----------
    console.log("Selecting Date : 2014 / April / 25 ");
               //select year by value
    await yearDropDown.selectOption("2014");
              //select month by visible label
    await monthDropDown.selectOption({label : "April"});
              // select Day by Value
    await dayDropDown.selectOption("25");
    console.log("Date Selected Successfully");
    
    //----------Get Selected Values----------
    const selectedYear = await yearDropDown.inputValue();
    const selectedMonth = await monthDropDown.inputValue();
    const selectedDay = await dayDropDown.inputValue();

    console.log("Selected Year is :", selectedYear);
    console.log("Selected Month is :", selectedMonth);
    console.log("Selected Day is :", selectedDay);

    //-----------Validate Selected Values-----
    if (selectedYear === "2014"){
        console.log("Selected Year is Correct")
    }
    else{
        console.log("Selected Year is incorrect");
    }

    await expect(yearDropDown).toHaveValue("2014");

    console.log("Selected Month Value : ",selectedMonth);

    await expect(dayDropDown).toHaveValue("25");
    console.log("DropDown Validation Passed");
    
});