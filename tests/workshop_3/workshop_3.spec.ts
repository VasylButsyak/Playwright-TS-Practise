import {test, expect} from '@playwright/test';

test.skip('Advanced Interactions', async({page})=>{
   await page.goto('file:///C:/Users/10523/Downloads/index.html');
   await page.hover('button#hover-me');
   expect (await page.textContent('button#hover-me')).toContain('Text Changed');

   await page.click('button#context-menu', {button: 'right'});
   expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

   await page.dblclick('button#double-click');
   expect(page.locator('img').count()).toBe(1);
});

test.skip('Drag and Drop', async({page})=>{
   await page.goto('file:///C:/Users/10523/Downloads/index.html');
   // await page.dragAndDrop('.drag-source', '.drop-target');
   // expect(await page.textContent('.drop-target')).toContain('Success');

   await page.locator('.drag-source').hover();
   await page.mouse.down();
   await page.locator('.drop-target').hover();
   await page.mouse.up();

});

test.only('Handing iframe', async({page})=>{
   await page.goto('file:///C:/Users/10523/Downloads/index.html');
   const iframElement = await page.frame({name:'iframeName'});
   const iframeSelector = '#iframe-input';
if(iframElement){
   await iframElement.type(iframeSelector, 'Hello Playwright');
   expect(await iframElement.locator(iframeSelector).inputValue()).toContain('Hello Playwright');
} else{
    console.error('Iframe isnt available')
}
});