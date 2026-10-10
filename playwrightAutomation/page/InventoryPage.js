import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
    constructor(page){
        super(page);
        this.pageTitle = page.locator('.title');
        this.cartLink = page.locator('.shopping_cart_link');
        this.cartLinkCount = page.locator('.shopping_cart_badge');
    }

    async addToCart(productName){
        await this.click(this.page.locator(`#add-to-cart-${productName}`));

    }

    async verifyCartCount(expected){
        await expect(this.cartLinkCount).toHaveCount(expected);
    }

    async openCart(){
        await this.click(this.cartLink);
    }


}