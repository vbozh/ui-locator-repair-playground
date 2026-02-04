import { test, expect } from '@playwright/test';

test('login works', async ({ page }) => {
  // baseURL is configured in playwright.config.ts
  await page.goto('/');

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('password');

  // The login button markup changed (id replaced with a data-testid).
  // Prefer an accessibility-based locator to make the test resilient.
  await page.getByRole('button', { name: /log\s*in|login/i }).click();

  await expect(page.locator('#message')).toHaveText(/welcome/i);
});
