import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('/');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password');

  // Button locator was changed in the app from `id` to `data-testid`.
  await page.getByTestId('login-button').click();

  await expect(page.locator('#message')).toHaveText('Login successful');
});
