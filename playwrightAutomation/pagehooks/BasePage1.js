export class BasePage1{
    constructor(page){
        this.page = page;

    }
    async goto(url){
        await this.page.goto(url);
    }
    async click(locator){
        await locator.click();
    }
    async type(locator , text){
        await locator.fill(text);
    }
    async getText(locator){
        return (await locator.textContent())?.trim();
    }
    async isVisible(locator){
        return await locator.isVisible();
    }
    byTest(value){
        return this.page.locator(`[data-test="${value}"]`);
    }
    byCss(selector){
        return this.page.locator(selector);
    }

}