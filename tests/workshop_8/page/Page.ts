import { Page } from "@playwright/test";
import { AbstrcatPage} from "./AbstractPage";
import { Button} from "./Button";
import { Input } from "./Input";


export class PageObject extends AbstrcatPage{
    private button: Button
    private input: Input
    readonly firstNameSelector = '#firstName';
    readonly ageSelector = '#age';
    readonly isStudentSelector = '#isStudent';
    readonly applyDataButtonSelector = '#applyData'
    
    readonly displayFirstName = '#displayFirstName';
    readonly displayAgeSelector = '#displayAge';
    readonly displayIsStudentSelector = '#displayIsStudent'

     constructor(page: Page){
         super(page);
         this.button = new Button(page)
         this.input = new Input(page)
         }
          async open(url: string): Promise<void> {
          await this.page.goto(url)
         } 
         async applyData(): Promise<void>{
            await this.button.clickButton(this.applyDataButtonSelector)
         }
         async fillFirstName(value: string): Promise<void>{
            await this.input.setInputValue(this.firstNameSelector, value)
         }
         async fillAge(value: string): Promise<void>{
            await this.input.setInputValue(this.ageSelector, value)
        }
        async checkIsStudent(): Promise<void>{
            await this.page.check(this.isStudentSelector)
        }
        async text(selector: string): Promise<string | null> {
            const textContext = await this.page.textContent(selector);
            return textContext ?? null
        }
    }
