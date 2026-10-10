/*  Types of Web Tabels
        1) Static Web Tabel
        2) Dynamic Web Tabel
*/
import{test , expect} from '@playwright/test';
test("Static Web Tabels" , async ({page}) => {

    await page.goto("https://vinothqaacademy.com/webtable/");

    await page.waitForLoadState('domcontentloaded');
    
    //const tabel = await page.locator("#myTable");
    //await tabel.scrollIntoViewIfNeeded();

    // locate all rows
    const allRows = await page.locator('//table[@id="myTable"]//tr');
    const allRowsCount = await allRows.count();
    console.log("Total Rows : ", allRowsCount);

    // locate all coloums
    const allColoums = await page.locator('//table[@id="myTable"]//th');
    const allColoumsCount = await allColoums.count();
    console.log("Total Coloumes : ",allColoumsCount);

    // Print all location(data) name from tabel
    const location = await page.locator('//table[@id="myTable"]//tr//td[5]');
    const locationCount = await location.count();
    console.log("Total Locations : ", locationCount);

    for(let i = 0 ; i < locationCount ; i++){
        const textLocation = await location.nth(i).textContent();
        console.log(`${i+1} . ${textLocation ? textLocation.trim() : ""}`);
    }
    console.log("----------------------------------------");

    // Print the Linda Wilsons Department
    for(let i = 2 ; i <= allRowsCount ; i++){
        const  name = await page.locator('//table[@id="myTable"]//tr[5]//td[2]').textContent();

        if(name && name.trim() === "Linda Wilson"){
            const Department = await page.locator('//table[@id="myTable"]//tr[5]//td[6]').textContent();

            console.log(`Name : ${name.trim()}`);
            console.log(`Department : ${Department}`);

        }
    }
   await page.waitForTimeout(3000);
});

//------------------------------------------------------
//             DYNAMIC WEB TABEL
//-----------------------------------------------------------
test("Dynamic Web Table" , async ({page}) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    await page.locator('//h2[contains(text(),"Playground")]').scrollIntoViewIfNeeded();

    //locate all rows
    const allRows = await page.locator('//table//tbody//tr');
    const rowCount = await allRows.count();
    console.log("Total Rows : " , rowCount);

    // Loop through each row
    for(let i = 0 ; i < rowCount ; i++){
        // locate all cells inside row
        const cells = allRows.nth(i).locator("td");
        const cellsCount = await cells.count();
        
        const rowData = [];

        //Read each cell
        for(let j = 0; j < cellsCount; j++){
            const text = await cells.nth(j).textContent();
            rowData.push(text ? text.trim() : "");
        }
         // print complete row
         console.log(rowData.join(" | "));   
    }

});    

test.only(" Static Table Handling " , async ({page}) => {
    await page.setDefaultTimeout(40000);
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    await page.waitForLoadState('domcontentloaded');


    // Count Total Rows
    const totalRows = await page.locator('//table[@id="customers"]//tr');
    const totalRowsCount = await totalRows.count();
    console.log("Total Rows : " ,totalRowsCount);

    console.log("----------------------------");

    // Count Total Colomes
    const totalColums = await page.locator('//table[@id="customers"]//tr[1]//th');
    const totalColumsCount = await totalColums.count();
    console.log("Total Colums : ", totalColumsCount);

    console.log("----------------------------");

    // Print Specific Row Data and Colum Data
    const specificText = await page.locator('//table[@id="customers"]//tr[3]//td[3]').innerText();
    console.log("Specific Cell Data : ", specificText);

    console.log("----------------------------");

    
    const onlyRowData = await page.locator('//table[@id="customers"]//tr[4]//td[2]').innerText();
    console.log(" Row 4th Data 2nd : " , onlyRowData);

    console.log("----------------------------");

    // Retrive all rowa and columns data
    for(let i = 2; i <= totalRowsCount; i++){

        let rowData1 = [];
        for(let j = 1; j <= totalColumsCount; j++){

            const data = await page.locator(`//table[@id="customers"]//tr[${i}]//td[${j}]`).innerText();
             
            rowData1.push(data);
        }
        console.log(rowData1.join(" | "));
    }
    
});