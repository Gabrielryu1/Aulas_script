

const ler = require('readline-sync')

let num1=0;
let num2= ler.questionInt("Digite um numero:  ");

while(num1 <= num2 ){

    if (num1 === 100) {
      console.log("Contagem pausada!! limite ate 100!");
     
       break;
    } else {
        console.log(num1);
    }
    num1 ++;
}