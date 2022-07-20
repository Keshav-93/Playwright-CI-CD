import {test,expect} from '@playwright/test';

test('Visit the Playwright url',async ({page})=>{
    await page.goto('https://playwright.dev/');
    const title=page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright')
})