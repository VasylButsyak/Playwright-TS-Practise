import {test} from '@playwright/test';


test.skip('Basic Navigation', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(2000);
    await page.reload();
});

test.skip('Interacting with Web Element', async ({page})=>{
    await page.goto('https://gitlab.com/');

    await page.locator('#be-navigation-desktop').getByRole('link', {name: 'Get free trial' }).click();
    await page.waitForTimeout(3000);
    // await page.locator('[data-testid="new-user-first-name-field"]').fill('John');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Johnson');
    await page.getByTestId('new-user-first-name-field').fill('John');
    await page.getByTestId('new-user-last-name-field').fill('Johnson');
});

test('Using Various Locator Methods', async({page})=>{
        await page.goto('https://gitlab.com/');
        await page.getByRole('button', {name: 'Search'}).click();
        await page.getByRole('link', {name: 'GitLab Duo (AI)'}).click();

});