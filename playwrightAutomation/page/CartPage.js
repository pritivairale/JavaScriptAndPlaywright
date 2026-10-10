import { BasePage } from "./BasePage";
 export class CartPage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;
        this.checkOutButton = page.locator('#checkout');
    }

    async checkout(){
        await this.click(this.checkOutButton);
    }
 }