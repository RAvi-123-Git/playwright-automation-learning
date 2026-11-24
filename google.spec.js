const { test, expect } = require('@playwright/test');

test('Open Google and search', async ({ page }) => {

    // Open Google
    await page.goto('https://www.google.com');

    // Verify Google page is opened
    await expect(page).toHaveTitle(/Google/);

    // Enter search text
    await page.locator('textarea[name="q"]').fill('Playwright automation testing');

    // Press Enter
    await page.locator('textarea[name="q"]').press('Enter');

    // Verify search results
    await expect(page).toHaveURL(/search/);

    console.log('Google search completed successfully');

});