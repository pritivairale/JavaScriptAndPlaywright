
import{test , expect}from "@playwright/test";

const { chromium } = require('playwright');

test( "handel new Tab " , async ({page}) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page1 = await context.newPage();
  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  const page2 = await context.newPage();
  await page2.goto('https://www.amazon.in/');

  await browser.close();
});