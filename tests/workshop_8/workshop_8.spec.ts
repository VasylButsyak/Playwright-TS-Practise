import {test , expect} from '@playwright/test';
import { PageObject } from './page/page';


test.describe('Sample Test',()=>{
 let pageObject: PageObject;
 test.beforeEach(async({browser})=>{
    const page = await browser.newPage()
    pageObject = new PageObject(page);
    await pageObject.open('file:///D:/learn-playwright/tests/workshop_7/index.html');

 })

    test('Test1: Fill all inputs', async({})=>{
        await pageObject.fillFirstName('John');
        await pageObject.fillAge('30');
        await pageObject.checkIsStudent();
        await pageObject.applyData();

        expect (await pageObject.text(pageObject.displayFirstName)).toBe('John');
        expect (await pageObject.text(pageObject.displayAgeSelector)).toBe('30');
        expect (await pageObject.text(pageObject.displayIsStudentSelector)).toBe('Yes');


    })
})