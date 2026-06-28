import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 1: Register Page'}).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('nemo');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('nemo@email.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Traveling' }).check();
  await page.getByLabel('Interests:').selectOption('art');
  await page.getByLabel('Interests:').selectOption('science');
  await page.getByLabel('Interests:').selectOption('music');
  await page.getByLabel('Country:').selectOption('canada');
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('1999-09-12');
  // await page.getByRole('button', { name: 'Profile Picture:' }).click();
  await page.getByRole('button', { name: 'Profile Picture:' }).setInputFiles('data/image/Ảnh màn hình 2026-06-13 lúc 21.18.30.png');
  await page.getByRole('textbox', { name: 'Biography:' }).click();
  await page.getByRole('textbox', { name: 'Biography:' }).fill('nemo');
  await page.getByRole('slider', { name: 'Rate Us:' }).fill('8');
  await page.getByText('#ff0000').click();
  await page.locator('#favcolor').click();
  await page.locator('#favcolor').fill('#000000');
  await page.getByRole('checkbox', { name: 'Subscribe' }).check();
  await page.locator('span').nth(3).click();
  await page.locator('#starRating').click();
  await page.getByRole('button', { name: 'Register' }).click();
});