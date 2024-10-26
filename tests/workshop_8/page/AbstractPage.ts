import { Page } from "@playwright/test";


export abstract class AbstrcatPage{
 protected page: Page

 constructor(page: Page){

    this.page = page

 }
  abstract open(url: string): Promise<void>
  
}