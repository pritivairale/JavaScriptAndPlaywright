import { test, expect } from '@playwright/test';

test.only('test RedBus', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.locator('div').filter({ hasText: /^From$/ }).nth(1).click();
  await page.getByRole('combobox', { name: 'From' }).fill('pune');
  await page.locator('#suggestion-0').click();
  await page.getByRole('combobox', { name: 'To' }).fill('mumbai');
  await page.locator('#suggestion-0').click();
  await page.getByRole('dialog', { name: 'Select date of journey' }).click();
  await page.getByRole('button', { name: 'Sunday, August 16,' }).click();
  await page.getByRole('button', { name: 'Search buses' }).click();
});