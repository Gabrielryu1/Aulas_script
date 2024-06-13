// estrutura de repetição  - while

const ler = require('readline-sync');

let num = ler.questionFloat("Informe um numero");

while (num > 0) {
    console.log(num);
    num--; //num = num -1
}