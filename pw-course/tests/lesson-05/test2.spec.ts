import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click({ clickCount: 2 });
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click({ clickCount: 3 });
  await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
});