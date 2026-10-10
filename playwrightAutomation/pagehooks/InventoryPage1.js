import { BasePage1 } from "./BasePage1";

export class InventoryPage extends BasePage1{
    constructor(page){
        super(page);
        this.title = this.byCss('.title');
        this.cartLink = this.byTest('shopping-cart-link');
        this.cartBadge = this.byTest('shopping_cart_badge');
        this.sortDropdown = this.byTest('product-sort-container');
    }

    async addToCart(productName){
        await this.click(this.page.locator(`#add-to-cart-${productName}`));
    }

    async getCartCount(){
        return (await this.cartBadge.isVsible()) ? Number(await this.getText(this.cartBadge)) : 0 ;

    }

    async openCart(){
        await this.click(this.cartLink);
       }
        
    async getTitle(){
            return await this.getText(this.title);
        }
    }
