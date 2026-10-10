import {expect} from "@playwright/test";

import { LoginPage } from "./LoginPage";

export class Dashboard{
    constructor(page){
        this.page = page;
        this.dashboardTitle = page.locator('//h6');
        this.pimMenu =page.locator("//span[text()='PIM']");
        
    }
    async validateDashboard(){
        await expect(this.dashboardTitle).toBeVisible();
    
    }
    async gotoPIM(){
        await this.pimMenu.click();
    }
}
