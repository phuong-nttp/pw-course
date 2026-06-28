import { test, expect } from '@playwright/test';

test('delete odd todo items', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

  const taskInput = page.getByRole('textbox', { name: 'Enter a new task' });
  const addButton = page.getByRole('button', { name: 'Add Task' });
  const taskItems = page.locator('#task-list li');

  for (let i = 1; i <= 100; i++) {
    await taskInput.fill(`Todo ${i}`);
    await addButton.click();
  }

  await expect(taskItems).toHaveCount(100);

  for (let i = 1; i <= 100; i += 2) {
    page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await page.locator(`#todo-${i}-delete`).click();
  }

  await expect(taskItems).toHaveCount(50);
  await page.close();
});