import { test, expect } from '@playwright/test';

test('login button logs the user in', async ({ page }) => {
  await page.goto('/');

  // The login button was migrated from an `id` locator to a `data-testid`.
  // Use test id to keep the selector stable across UI refactors.
  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('login-message')).toHaveText('Logged in');
});
