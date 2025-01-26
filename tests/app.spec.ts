import { test, expect } from '@playwright/test';

test.describe('Crypto Tracker App', () => {
  test('should load and display the chart', async ({ page }) => {
    await page.goto('/');
    const canvas = await page.waitForSelector('canvas');
    expect(canvas).toBeTruthy();
    
  });

});