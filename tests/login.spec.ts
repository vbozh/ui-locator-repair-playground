import { test, expect } from '@playwright/test';

test('user can submit login form', async ({ page }) => {
  await page.goto('http://localhost:3006');

  await page.click('[data-testid="login-submit"]');
  await expect(page.locator('[data-testid="login-submit"]')).toBeVisible();
});
