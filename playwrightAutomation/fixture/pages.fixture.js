import {test as base , expect} from "@playwright/test";
import { LoginPage } from "../pagehooks/LoginPage";
import { InventoryPage } from "../pagehooks/InventoryPage1";
import { CartPage } from "../pagehooks/CartPage1";
import { CheckoutPage } from "../pagehooks/CheckoutPage1";

const test = base.extend({
    loginPage : async({page},use)=>{
        await use(new LoginPage(page));
    },

    inventoryPage : async({page} , use) =>{
        await use(new InventoryPage(page));
    },
    cartPage : async({page} , use)=>{
        await use(new CartPage(page));

    },
    checkoutPage : async({page} , use) =>{
        await use(new CheckoutPage(page));
    },
    loginInventery : async ({page , loginPage, inventoryPage },use) =>{
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await use(inventoryPage);
    }


});