import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('admin');

  // The login button was updated in the app from an `id` to a `data-testid`.
  // Prefer the test id, but keep a role/id fallback to make this test more robust.
  const loginButton = page
    .getByTestId('login-button')
    .or(page.locator('#login-button'))
    .or(page.getByRole('button', { name: /log in|login/i }));

  await loginButton.click();

  await expect(page.locator('#message')).toContainText('success');
});
