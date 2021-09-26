const {test, expect} = require('@playwright/test')

test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });

//   test('testing-playwright', async ({page}) => {
//       await page.goto('https://www.qa.dentallive.com/')
//       const title = page.locator('.navbar-nav[0] .nav-item[1]')
//       await expect(title).toHaveText('something')

//   })
