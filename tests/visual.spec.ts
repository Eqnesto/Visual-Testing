import { test, expect } from '@playwright/test';

test.describe('ACME Bank - Visual Test', () => {

  test('Login & Main Page Check', async ({ page }) => {

    // Load the login page.
    await page.goto('https://demo.applitools.com');

    // Verify the full login page loaded correctly.
    await page.locator('#log-in').waitFor({ state: 'visible' });

    // This will take a screenshot named 'login-page.png'.
    await expect(page).toHaveScreenshot('login-page.png', { fullPage: true });

    // Perform login.
    await page.locator('id=username').fill('andy');
    await page.locator('id=password').fill('i<3pandas');
    await page.locator('id=log-in').click();

    // This will take a screenshot named 'main-page.png'.
    await expect(page).toHaveScreenshot('main-page.png', { fullPage: true });
  });

});