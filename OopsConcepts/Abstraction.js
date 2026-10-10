class Calculator{
    constructor(a ,b,c) {
      this.a = a;
      this.b = b;
      this.c = c ;
    }
    getValues(){

        console.log(`For Calculation we have ${this.a} and ${this.b} Numbers`);
    }
    #getAddition(){
        
            this.c = this.a + this.b;
             console.log(`Addition is ${c}`);
    }
    #getSubstraction(){
             this.c = this.a - this.b;
             console.log(`Substraction is ${this.c}`);
    }
    #getMultiplication(){
        this.c = this.a * this.b;
        console.log(`Multiplication is ${this.c}`);
    }
    
    result(){
        //this.getValues();
          this.#getAddition(24,2);
          this.#getMultiplication();
          this.#getSubstraction();


    }
}
let obj = new Calculator(10,20);
obj.getValues();
obj.result();