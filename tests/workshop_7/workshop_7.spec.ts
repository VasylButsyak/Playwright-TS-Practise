import{test, expect} from '@playwright/test';
const selectors = {
    firstname:'#firstName',
    age:'#age',
    IsStudent:'#isStudent',

}
test.describe('Variable Declaration and Types',()=>{
    const selectors = {
        firstname:'#firstName',
        age:'#age',
        IsStudent:'#isStudent',
    
    }
       test.skip('Declaration and Types', async({page})=>{
        let firstname: string = 'John';
        let age: number = 30;
        let IsStudent: boolean = false;
        const displayIsStudent = await page.getByTestId('#displayIsStudent');
           await page.goto('file:///D:/learn-playwright/tests/workshop_7/index.html');
           await page.fill(selectors.firstname, firstname);
           await page.fill(selectors.age, age.toString());
           await page.check(selectors.IsStudent);
           await page.click('#applyData');
                 expect(await page.textContent('#displayFirstName')).toBe(firstname);
                 expect(await page.textContent('#displayAge')).toContain(age.toString());
                 expect(await page.isChecked('#isStudent')).toBe(true);


       })
})

test.describe('Type Definition and Interfaces', ()=>{
    type User = {
        firstname: string,
        age: number,
        isStudent: boolean,
    };

    let user: User = {
        firstname:'John',
        age: 30,
        isStudent: false

    }
test.skip('Type Def and Interfaces', async({page})=>{
    await page.goto('file:///D:/learn-playwright/tests/workshop_7/index.html');
    await page.fill(selectors.firstname, user.firstname);
    await page.fill(selectors.age, user.age.toString());
    await page.click('#applyData');
     expect(await page.textContent('#displayFirstName')).toBe(user.firstname);
     expect(await page.textContent('#displayAge')).toContain(user.age.toString());
     expect(await page.isChecked('#isStudent')).toBe(user.isStudent);

        
    
    })
})