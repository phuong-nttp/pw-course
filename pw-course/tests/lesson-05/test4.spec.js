import { test, expect } from '@playwright/test';

test('Search notes', async ({ page }) => {
  const actions = {
    click: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web',
    fill: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web',
    type: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng',
    hover: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover',
    check: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked',
    uncheck: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked',
    selectOption: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown',
    press: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác',
    dblclick: 'Hàm dblclick dùng để thực hiện double click vào phần tử trên trang web',
    dragAndDrop: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'
  };

  const keyword = 'một hoặc nhiều';

  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();

  const titleInput = page.getByPlaceholder('Enter note title');
  const contentInput = page.getByPlaceholder('Enter note content');
  const searchInput = page.getByPlaceholder('Search notes...');
  const addButton = page.getByRole('button', { name: 'Add Note' });

  for (const [title, content] of Object.entries(actions)) {
    await titleInput.fill(title);
    await contentInput.fill(content);
    await addButton.click();
  }

  await expect(page.locator('#note-count'))
    .toHaveText(`Total Notes: ${Object.keys(actions).length}`);

  await searchInput.fill(keyword);

  const notes = page.locator('#notes-list > li');
  const total = await notes.count();

  for (let i = 0; i < total; i++) {
    await expect(notes.nth(i).locator('p')).toContainText(keyword);
  }
  await page.close();
});