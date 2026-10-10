import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SauceLoginPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        //Product
        this.pageTitle = page.locator('.title');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logOutLink = page.locator('#logout_sidebar_link');
    }

    async goto(){
        await this.navigate('https://www.saucedemo.com/');
    }

    async loginBase(username , password){
        await this.type(this.usernameInput , username);
        await this.type(this.passwordInput , password);
        await this.click(this.loginButton);

    }

    async verifyInventoryPage(){
        await expect(this.pageTitle).toHaveText('Products');
    }

    async logout(){
        await this.click(this.menuButton);
        await this.click(this.logOutLink);
    }


};