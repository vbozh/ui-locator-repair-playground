import { test, expect } from '@playwright/test';

test('user can submit login form', async ({ page }) => {
  await page.goto('http://localhost:3006');

  await page.click('#submit-btn');
  await expect(page.locator('#submit-btn')).toBeVisible();
});
