import { test, expect } from '@playwright/test';

test('login button logs the user in', async ({ page }) => {
  await page.goto('/');

  // The login button was migrated from id="submit-btn" to data-testid="login-button".
  // Using getByTestId() for a stable selector that won't break with UI refactors.
  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('login-message')).toHaveText('Logged in');
});
