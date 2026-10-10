class Parent{

    print(a,b){
        console.log("This is Parent Class")
    }
    print(a,b,c,d){
        console.log("This is Parent Class")
    }
}
class Child extends Parent{
   
    print(a,b,c){
        console.log("This is Child Class")
    }
}
const obj = new child();
obj.print(a,b);