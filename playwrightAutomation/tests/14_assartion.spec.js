import{test , expect} from '@playwright/test';
test(" Assartion Example" , async ({page}) => {
    // open Add / Remove Element Page
await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

// Verify page Heading
await expect(page.locator("h3")).toHaveText("Add/Remove Elements");

//Locate Add element button

const addBtn = await page.locator('//button[@onclick="addElement()"]');
const deleateBtn = await page.locator('//button[@onclick="deleteElement()"]');

// Initially, no deleate buttons should be present
await expect(deleateBtn).toHaveCount(0);

// Validade Add Buttons
await expect(addBtn).toBeVisible();
await expect(addBtn).toBeEnabled();

// Add three Buttons 
await addBtn.click();
await addBtn.click();
await addBtn.click();

// Verify three buttons are created
await expect(deleateBtn).toHaveCount(3);

// Verify the last delete button text
await expect(deleateBtn.last()).toHaveText("Delete");

//Delete the frist button
await deleateBtn.first().click();

// Verify only two buttons remaining
await expect(deleateBtn).toHaveCount(2);

console.log("Add/Remove assertion validation passed");

});

// DATA TABLE VALIDATION
//=======================

test("Data Table Validation" , async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/tables");
    const tabel1 = await page.locator("#table1");

    await expect(tabel1).toBeVisible();

    // Locate tabel headers
    const headers = tabel1.locator("thead th");

    // Validate table headers
    await expect(headers.nth(0)).toHaveText("Last Name");
    await expect(headers.nth(1)).toHaveText("First Name");
    await expect(headers.nth(2)).toHaveText("Email");
    await expect(headers.nth(3)).toHaveText("Due");
    await expect(headers.nth(4)).toHaveText("Web Site");
    await expect(headers.nth(5)).toHaveText("Action");

    console.log("Tabel Header Validation Passed");

});

// Data Table - ROW Count And Data Validation

test.only(" Data Table Count and Data Validation ", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/tables");

    const table = await page.locator("#table1");

    await expect(table).toBeVisible();

    const headers = table.locator("thead th");

    // Validate table headers
    await expect(headers.nth(0)).toHaveText("Last Name");
    await expect(headers.nth(1)).toHaveText("First Name");
    await expect(headers.nth(2)).toHaveText("Email");
    await expect(headers.nth(3)).toHaveText("Due");
    await expect(headers.nth(4)).toHaveText("Web Site");
    await expect(headers.nth(5)).toHaveText("Action");

    // Locate all table rows
    const rows = table.locator("tbody tr");

    // Get total row Count
    const rowCount = await rows.count();

    // Verify at least one row exists
    expect(rowCount).toBeGreaterThan(0);
    console.log("Row Count : ", rowCount);

    //===============================================
    // VALIDATE FIRST ROW DATA
    //=========================================

    // locate first row
    const firstRow = rows.first();

    // Locate cells inside first row

    const cells = firstRow.locator("td");

    // Validate first row
    await expect(cells.nth(0)).toHaveText("Smith");
    await expect(cells.nth(1)).toHaveText("John");
    await expect(cells.nth(2)).toHaveText("jsmith@gmail.com");
    await expect(cells.nth(3)).toHaveText("$50.00");
    await expect(cells.nth(4)).toHaveText("http://www.jsmith.com");
    await expect(cells.nth(5)).toContainText("edit");
    await expect(cells.nth(5)).toContainText("delete");

    // ALTERNATIVE LOCATOR FOR DUE PRICE

    const price = page.locator('//table[@id="table1"]//tbody//tr[4]//td[4]');

    await expect(price).toContainText("$");
    console.log("First row data validation completed");

});
