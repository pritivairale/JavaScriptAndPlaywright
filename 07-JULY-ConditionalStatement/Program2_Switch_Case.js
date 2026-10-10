let day=4;
switch(day){
    case 1:
        console.log(`${day} = Monday`);
        break;
    case 2:
        console.log(`${day} = Tuesday`);
        break;
    case 3:
        console.log(`${day} = Wednesday`);
        break; 
    case 4:
        console.log(`${day} = Thursday`);
        break;  
    case 5:
        console.log(`${day} = Friday`);
        break;  
    case 6:
        console.log(`${day} = Saturday`);
        break;  
    case 7:
        console.log(`${day} = Sunday`);
        break; 
    default:
        console.log("Invalid Day");              
}

console.log("--------------------------------------")

//Print Without break statement.
let fruit = "apple";
switch(fruit){
    case "apple":
        console.log("Apple Selected");
    case "banana":
        console.log("Banana Selected");
    case "orange":
        console.log("Orange Selected");
    case "mango":
        console.log("Mango Selected");
        break;
    default:
        console.log("Unknown Fruit");                
}

console.log("------------------------------------")
//Print calculation of two numbers
let num1=12;
let num2=27;
let operator="+";
switch(operator){
    case "+":
        console.log(`${num1}+${num2} =`,num1+num2);
        break;
    case "*":
        console.log(`${num1}+${num2} =`,num1*num2);
        break;
    case "/":
        console.log(`${num1}+${num2} =`,num1-num2);
        break;
    case "-":
        console.log(`${num1}+${num2} =`,num1/num2);
        break;
    default:
        console.log("Invalid Opration");
}        
  
 
