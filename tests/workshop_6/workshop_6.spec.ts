import {test, expect} from '@playwright/test';
import { error } from 'console';

const testData = {
    firstname: 'Jonh',
    lastname: 'Johnson',
    address: 'London, St.Baker',
    number:'1234567',
}


test.describe('User Registration test', ()=>{
  test.beforeEach(async({page})=>{
    await page.goto('file:///D:/learn-playwright/tests/workshop_6/index.html');
  })
     test.only('Register with valid data', async({page})=>{
         await page.fill('#firstName', testData.firstname);
         await page.fill('#lastName', testData.lastname);
         await page.fill('#address', testData.address);
         await page.fill('#number', testData.number);
         await page.click('#register');

         const FirstNameText = await page.locator('#displayFirstName').textContent();
         const LastNameText = await page.locator('#displayLastName').textContent();
         const AddressText = await page.locator('#displayAddress').textContent();
         const NumberText = await page.locator('#displayNumber').textContent();

         await expect(FirstNameText).toEqual(testData.firstname);
         await expect(LastNameText).toEqual(testData.lastname);
         await expect(AddressText).toEqual(testData.address);
         await expect(NumberText).toEqual(testData.number);   
        
        
    });
    test.only('Register with empty fields', async({page})=>{
        await page.fill('#firstName', testData.firstname);
        await page.fill('#lastName', testData.lastname);
        await page.click('#register');
        const error = await page.locator('#error p').textContent()
        await expect(error).toBe('Please fill in all fields.');    
   });
   test.only('Register with all empty fields', async({page})=>{
        await page.click('#register');
        const error = await page.locator('#error p').textContent()
        await expect(error).toBe('Please fill in all fields.');    
});

})


