import { BasePage1 } from "./BasePage1";
export class CheckoutPage extends BasePage1{
    constructor(page){
        super(page);
        this.firstName = this.byTest('firstName');
        this.lastName = this.byTest('lastName');
        this.postalCode = this.byTest('postalCode');
        this.continueButton = this.byTest('continue');
        this.finishButton = this.byTest('finish');
        this.summaryTotal = this.byCss('.summary_total_label');
        this.completeHeader = this.byCss('.complete-header');
        this.backHomeButton = this.byTest('back-to-products');
    }
    async enterCustomerDetails(firstName , lastName , zip ){
          await this.type(this.firstName , firstName);
          await this.type(this.lastName , lastName);
          await this.type(this.postalCode , zip);
          await this.click(this.continueButton);
    }
    
    async finishOrder(){
        await this.click(this.finishButton);
    }
}