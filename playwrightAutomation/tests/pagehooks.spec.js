import {test ,expect} from "@playwright/test";
import { LoginPage } from "../pagehooks/LoginPage";
import { InventoryPage } from "../pagehooks/InventoryPage1";
import { CartPage } from "../pagehooks/CartPage1";
import { CheckoutPage } from "../pagehooks/CheckoutPage1";


 test.describe("SauceDemo End to end checkout" , () => {
    let loginPage , inventoryPage , cartPage , checkoutPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);

        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(inventoryPage.title).toHaveText("Products");
    });

    test("Complete purchase flow end to end" , async ({page}) =>{
        await inventoryPage.addToCart('sauce-labs-backpack');
        await inventoryPage.addToCart('sauce-labs-bike-light');
        await inventoryPage.openCart();

        expect (await cartPage.getItemCount()).toBe(2);
        const names = await cartPage.getItemNames();
        await expect(names).toContain("sauce labs backpack");
        await cartPage.checkout();

        await checkoutPage.enterCustomerDetails('Bharti' , 'Bodade','2344');
        await checkoutPage.finishOrder();
    
    });
     
    test.afterEach(async ({page}, testInfo) => {
        console.log(`Test ${testInfo.title} ===> ${testInfo.status}`);
    });

 });