import { expect } from "@playwright/test";
import { LoginPage} from "./LoginPage";
import { Dashboard } from "./Dashboard";

export class PIMPage {
    constructor(page){
        this.page = page;
        this.pimTitle = page.locator("oxd-topbar-header-breadcrumb");
        this.empName = page.getByPlaceholder('Type for hints...');
        this.empID = page.locator('//input[@class="oxd-input oxd-input--active"]').last();

    }
    async empList(name , id){
        await this.empName.fill(name);
        await this.empID.fill(id);
    }
}
