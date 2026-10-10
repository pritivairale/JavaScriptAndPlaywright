import { BasePage1 } from "./BasePage1";

export class LoginPage extends BasePage1{
    constructor(page){
        super(page);
        this.url = "https://www.saucedemo.com/";
        this.uesernameInput = this.byTest('username');
        this.passwordInput = this.byTest('password');
        this.loginButton = this.byTest('login-button');
        this.errorMessage = this.byTest('error');
    }

    async open(){
        await this.goto(this.url);
    }

    async login(username , password){
        await this.type(this.uesernameInput,username);
        await this.type(this.passwordInput,password);
        await this.click(this.loginButton);
    }
    async getErrorMessage(){
        return await this.getText(this.errorMessage);
    }
}