
import { test, expect } from '@playwright/test';

// Нэвтэрсний дараа барааг сагсанд нэмэх тест
test('бараа сагсанд нэмэх', async ({ page }) => {

  // 1. SauceDemo вебсайт нээх
  await page.goto('https://www.saucedemo.com/');

  // 2. Хэрэглэгчээр нэвтрэх
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Products хуудас нээгдсэнийг шалгах
  await expect(page.getByText('Products')).toBeVisible();

  // 4. Sauce Labs Backpack барааг сагсанд нэмэх
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 5. Сагсны тоо 1 болсон эсэхийг шалгах
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 6. Сагс руу орох
  await page.getByRole('button', { name: /Cart/ }).click();

  // 7. Сагсанд зөв бараа нэмэгдсэн эсэхийг шалгах
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  // 8. Logout хийх
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();

  // 9. Login хуудас руу буцсаныг шалгах
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
