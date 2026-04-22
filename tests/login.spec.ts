import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginAs('testdesy11@gmail.com', 'Desy@123');
  // await expect(page.getByText('Successfully logged in!')).toBeVisible();
});