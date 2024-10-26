import {test, expect} from '@playwright/test';


test.skip ('Automating From submission', async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');
    const NewToDo = await page.getByPlaceholder('What needs to be done?');
    await NewToDo.fill('John Doe');
    await NewToDo.press('Enter');
    await NewToDo.fill('JJ Doe');
    await NewToDo.press('Enter');
    await page.waitForTimeout(3000);


    const FirstToDo = page.getByTestId('todo-item').nth(0);
    await FirstToDo.getByRole('checkbox').check();

    const SecondToDo = page.getByTestId('todo-item').nth(1);
    await expect(SecondToDo).not.toHaveClass('completed');
    await expect(FirstToDo).toHaveClass('completed');

});

test('Handing Form', async({page})=>{
    
    await page.goto('https://demo.playwright.dev/todomvc');
    const placeholder = '[placeholder= "What needs to be done?"]'
    await page.fill(placeholder,'John Doe');
    await page.locator(placeholder).press('Enter');
    const checkbox = await page.locator('.toggle');
    await checkbox.check();
    await page.waitForTimeout(3000);

});

