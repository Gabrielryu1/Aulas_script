const ler =require('readline-sync');

let valor = ler.questionFloat("informe um valor: ");

var result = valor > 15.99 ?  "Valor maior que 15.99" : "valor menor que 15.99";

console.log(result);