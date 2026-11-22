import { test, expect } from '@playwright/test';

// SauceDemo амжилттай нэвтрэх тест
test('амжилттай нэвтрэх', async ({ page }) => {

  // 1. SauceDemo вебсайт руу нэвтрэх
  await page.goto('https://www.saucedemo.com/');

  // 2. Хэрэглэгчийн нэр болон нууц үг оруулах
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // 3. Login товч дарах
  await page.getByRole('button', { name: 'Login' }).click();

  // 4. Амжилттай нэвтэрсэн эсэхийг шалгах
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();

  // 5. Цэс нээх
  await page.getByRole('button', { name: 'Open Menu' }).click();

  // 6. Logout хийх
  await page.getByRole('button', { name: 'Logout' }).click();

  // 7. Login хуудас руу буцсан эсэхийг шалгах
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});