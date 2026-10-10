// Class :
// Class is Bluprint or Templet for object. with shared propertise and methods.
// Constructor:
// Constructor is Special method of class use to Initialized the object Properties.

class Calculator{
    constructor(a ,b) {
      this.a = a;
      this.b = b;
      this.c ;
    }
    getValues(){
        console.log(`For Calculation we have ${this.a} and ${this.b} Numbers`);
    }
    getAddition(){
             this.c= this.a + this.b;
             console.log(`Addition is ${this.c}`);
    }
    getSubstraction(){
             this.c = this.a - this.b;
             console.log(`Substraction is ${this.c}`);
    }
    getMultiplication(){
        this.c = this.a * this.b;
        console.log(`Multiplication is ${this.c}`);
    }
  
    }

let result= new Calculator(10,20);
result.getValues();
result.getAddition();
result.getMultiplication();
result.getSubstraction();
