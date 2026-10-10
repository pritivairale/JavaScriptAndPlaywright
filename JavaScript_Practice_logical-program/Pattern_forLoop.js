/*  Star Pattern Program
1
12
123
1234
12345  */

for(i=1 ; i<=1 ; i++){
     let line = "";
    for(j=1; j<=5 ; j++){
        line += j;
        console.log(line);
    }
}

console.log("====================================");
/*
5
54
543
5432
54321
*/
for(let k=1 ; k<=1; k++){
    let line1 = "";
    for(let c=5 ; c >= 1 ; c--){
        line1 += c;
        console.log(line1);
    }
}

console.log("===================================");
/*
*
**
***
****
*****
*/
for(let r = 1; r <= 1; r++){
    line = "";
    for(c = 1 ; c <= 5 ; c++ ){
        line += "*";
        console.log(line);
    }
}

console.log("===================================");
/*----------
*****
****
***
**
*
--------------*/
for(let r = 1; r <= 5; r++){
    line = "";
    for(c = 5; c >= r ; c-- ){
        line += "*";
    
    }console.log(line);
}

console.log("=====================================");

/*------------------
    *
   **
  ***
 ****
*****
--------------------*/
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let row = "";
    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        row += " ";
    }
    // Print stars
    for (let k = 1; k <= i; k++) {
        row += "*";
    }
    console.log(row);
}

