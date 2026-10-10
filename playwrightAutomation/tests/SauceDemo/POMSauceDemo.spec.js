import {test , expect} from "@playwright/test"
import { SauceLoginPage } from "../../page/SauceLoginPage";
import { InventoryPage} from "../../page/InventoryPage";
import { CartPage } from "../../page/CartPage";
import { CheckoutPage } from "../../page/CheckoutPage";

test("SauceDemo Login Page" , async ({page}) =>{
    const loginPage = new SauceLoginPage(page);

    await loginPage.goto();
    await loginPage.loginBase("standard_user" , "secret_sauce");
    await loginPage.verifyInventoryPage();
    await loginPage.logout();

    await expect(loginPage.loginButton).toBeVisible();

});

test.only("Sauce Demo E2E Process" , async ({page}) => {
    const loginPage = new SauceLoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.loginBase("standard_user" , "secret_sauce");
    await loginPage.verifyInventoryPage();

    await inventory.addToCart("sauce-labs-backpack");
    await inventory.verifyCartCount(1);
    await inventory.openCart();

    await cart.checkout();

    await checkout.fillDetails('Bharti' , 'Bodade', '2344');
    await checkout.finish();
    await checkout.verifyOrderComplete();

    await loginPage.logout();
});