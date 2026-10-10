import{test,expect}from '@playwright/test';
import path from "path";
import fs from "fs";

test("Download file", async ({page}) => {
   await page.goto("https://demoqa.com/upload-download");

   const [fileDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#downloadButton').click()
  ]);
   
  console.log("Download Started");

  // Get download file Name
  const fileName = fileDownload.suggestedFilename();
  console.log("Downloaded File Name : ", fileName);

  // Validate File Name
  await expect(fileName).toBe("sampleFile.jpeg");

  // Create Download Path
  const downloadPath = path.join("downloads",fileName);

  // Save downloaded file
  await fileDownload.saveAs(downloadPath);
  console.log(" File Saved At :", downloadPath);

  // Validate file exists
  expect(fs.existsSync(downloadPath)).toBeTruthy();
});