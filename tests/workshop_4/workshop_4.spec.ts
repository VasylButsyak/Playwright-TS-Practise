import {test, expect} from '@playwright/test';

test.skip('Handling Alerts', async({page})=>{


    await page.goto('file:///D:/learn-playwright/tests/workshop_4/index.html');
    let AlertMessage = '';
    page.on('dialog', async(dialog)=>{
        expect(dialog.type()).toBe('alert');
        const AlertMessage = await dialog.message();
        await dialog.accept();
    })
    await page.click('#show-alert');
    await page.waitForTimeout(3000);
    expect(AlertMessage).toBe('This is a simple alert.');
    
});

test.skip('Confirm Alerts', async({page})=>{


    await page.goto('file:///D:/learn-playwright/tests/workshop_4/index.html');
    let AlertMessage = '';
    page.on('dialog', async(dialog)=>{
        AlertMessage = dialog.message();
        await dialog.dismiss();
    })   

    await page.click('#show-confirm');
    expect(AlertMessage).toBe('You clicked Cancel.');
    
});

test.only('Handling POP-UP', async({page})=>{


    await page.goto('file:///D:/learn-playwright/tests/workshop_4/index.html');
const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#open-popup')

])   
await popup.waitForLoadState();
await popup.close();
});