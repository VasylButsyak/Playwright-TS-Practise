import {test , expect} from '@playwright/test';
import { PageObject } from './page/page';
import * as testData from './testData.json';


test.describe('Sample Test',()=>{
 let pageObject: PageObject;
 test.beforeEach(async({browser})=>{
    const page = await browser.newPage()
    pageObject = new PageObject(page);
    await pageObject.open('file:///D:/learn-playwright/tests/workshop_7/index.html');

 })

   for(const data of Object.values(testData)){
    if(data.testName === 'Test 1 - Fill Inputs' || data.testName === 'Test 1 - Negative'){
        test.skip(data.testName, async()=>{
             await pageObject.fillFirstName(data.firstName);
             await pageObject.fillAge(data.age);
             if(data.isStudent){
                await pageObject.checkIsStudent()
             }
             await pageObject.applyData();
        expect (await pageObject.text(pageObject.displayFirstName)).toBe(data.expectedFirstName)
        expect (await pageObject.text(pageObject.displayAgeSelector)).toBe(data.expectedAge);
        expect (await pageObject.text(pageObject.displayIsStudentSelector)).toBe(data.expectedIsStudent);


        })
    }
   }
})