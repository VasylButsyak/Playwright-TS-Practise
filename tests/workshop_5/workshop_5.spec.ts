import {test, expect} from '@playwright/test';

test.skip('Open New Window and Navigate Back', async({context, page})=>{


    await page.goto('file:///D:/learn-playwright/tests/workshop_5/index%20.html');
    const pagePromise = context.waitForEvent('page')
    await page.click('#openNewWindow');
    const NewPage = await pagePromise;
    await NewPage.waitForLoadState();
    console.log(await NewPage.title());
    await expect(NewPage.getByRole('heading', {name: 'Welcome to the New Page'})).toBeVisible();

    
    
});

test.skip('Add Cookie', async({page})=>{


    await page.goto('file:///D:/learn-playwright/tests/workshop_5/index%20.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///D:/learn-playwright/tests/workshop_5/index%20.html');
    const sessionCookies = cookies.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', sessionCookies);
    await expect(sessionCookies).toBeDefined();
    
    
    
});


test.only('Delete Cookie', async({page})=>{


    await page.goto('file:///D:/learn-playwright/tests/workshop_5/index%20.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///D:/learn-playwright/tests/workshop_5/index%20.html');
    const sessionCookies = cookies.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', sessionCookies);

    await page.click('#deleteCookie')
    const Deletecookies = await page.context().cookies('file:///D:/learn-playwright/tests/workshop_5/index%20.html');
    const DeletesessionCookies = Deletecookies.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', DeletesessionCookies);
    await expect(DeletesessionCookies).not.toBeDefined();
    
});

