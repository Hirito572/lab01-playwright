import { test, expect } from '@playwright/test';

// Буруу нууц үгээр нэвтрэх тест
test('буруу нууц үгээр нэвтрэх', async ({ page }) => {

  // SauceDemo вебсайт нээх
  await page.goto('https://www.saucedemo.com/');

  // Хэрэглэгчийн нэр, буруу нууц үг оруулах
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  // Login товч дарах
  await page.getByRole('button', { name: 'Login' }).click();

  // Алдааны мессежийг шалгах
  await expect(page.getByText(
    'Epic sadface: Username and password do not match any user in this service'
  )).toBeVisible();

  // Login хуудас хэвээр байгааг шалгах
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});