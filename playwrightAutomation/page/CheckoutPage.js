import { BasePage } from "./BasePage";
import {expect} from "@playwright/test";

export class CheckoutPage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
        this.finishBtn = page.locator('#finish');
        this.confirmMsg = page.locator('.complete-header');

    }
    async fillDetails(first , last , zip){
        await this.type(this.firstName , first);
        await this.type(this.lastName , last);
        await this.type(this.postalCode , zip);
        await this.click(this.continueBtn);

    }

    async finish(){
        await this.click(this.finishBtn);

    }

    async verifyOrderComplete(){
        await expect(this.confirmMsg).toHaveText("Thank you for your order!");
    }
    
} 