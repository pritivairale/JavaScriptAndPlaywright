import { BasePage1 } from "./BasePage1";
export class CartPage extends BasePage1{
    constructor(page){
        super(page);
        this.cartItems = this.byTest('shopping-cart-badge');
        this.itemNames = this.byCss('.inventory_item_name');
        this.checkoutButton = this.byTest('checkout');
        this.continueShopping = this.byTest('continue-shopping');
    }

    async getItemCount(){
        const text = await this.cartItems.textContent();
        return text ? Number(text.trim()) : 0 ;

    }
    async getItemNames(){
        return (await this.itemNames.allTextContents()).map(name => name.trim().toLowerCase());

    }
    async checkout(){
        await this.click(this.checkoutButton);
    }
}