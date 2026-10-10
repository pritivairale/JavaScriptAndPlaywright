import{test , expect} from "@playwright/test"; 
test("Handel IFrame " , async ({page}) => {
    await page.goto("https://letcode.in/frame");

    const frFrame = await page.frameLocator("#firstFr");
    await frFrame.locator('//input[@name="fname"]').fill("Bharti");
    await frFrame.locator('//input[@name="lname"]').fill("Vairale");
    const text = await frFrame.locator('//p[@class="text-sm font-semibold text-center"]').textContent();
    console.log(text);
    await expect(text).toBe("You have entered Bharti Vairale");

});

test("Handel  Inner (Nested) IFrame" , async ({page}) => {
    const frFrame = await page.frameLocator("#firstFr");
    await page.goto("https://letcode.in/frame");
    const secIframe = await frFrame.frameLocator("//iframe[@title='Inner Frame']");
    await expect(secIframe.locator("//label[text()='Email']")).toBeVisible();
    await secIframe.locator("//input[@name='email']").fill("pritiBodade@gmail.com");
});

test.only(" Handel Multiple Ifarme" , async ({page}) => {
    await page.goto("https://vinothqaacademy.com/iframe/");
    const firstIframe = await page.frameLocator('//iframe[@name="employeetable"]');
    //const SecIframe = await page.frameLocator('//iframe[@name="popuppage"]');
    //const thirdIframe = await page.frameLocator('//iframe[@name="registeruser"]');

    //Validate of first iframe
    await firstIframe.locator("#nameInput").fill("Alish");
    await firstIframe.locator("#roleInput").fill("QA");
    
    const clickCheckBox = await firstIframe.locator('//input[@type="checkbox"]').first()
    await clickCheckBox.check();
    await expect(clickCheckBox).toBeChecked();

    await clickCheckBox.uncheck();
    await expect(clickCheckBox).not.toBeChecked();

  // Validaet second Iframe  

  const SecIframe = await page.frameLocator('//iframe[@name="popuppage"]'); 

  page.on("dialog", async(dialog) => {
    dialog.accept();
  });


  await SecIframe.locator('//button[@name="alertbox"]').click();
  await expect(SecIframe.locator("#demotwo")).toHaveText("You clicked on OK!");

// Validate Thired Frame
 const thirdIframe = await page.frameLocator('//iframe[@name="registeruser"]');

 const firstName = await thirdIframe.locator("#vfb-5").fill("Bharti");
 const lastName = await thirdIframe.locator("#vfb-7").fill("Vairale");
 await thirdIframe.locator('//input[@id="vfb-31-2"]').click();
 await thirdIframe.locator('//input[@id="vfb-20-0"]').click();

 await expect(thirdIframe.locator("#vfb-5")).toHaveValue("Bharti");
 await expect(thirdIframe.locator("#vfb-7")).toHaveValue("Vairale");
 await expect(thirdIframe.locator('//input[@id="vfb-31-2"]')).toBeEnabled();

});