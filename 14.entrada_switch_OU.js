// entrada de opções utilizando Condicional ou no switch case

const ler = require('readline-sync');

let porta = ler.question("Escolha uma porta:  A - B - C ou D: ");

switch (porta) {
    case 'A':
    case 'a':
        console.log("A porta A foi aberta");
        
        break;
    case 'B':
    case 'b':
        console.log("A porta B foi aberta");

        break;
    case 'C':
    case 'c':
        console.log("A porta C foi aberta");
        break;
    case 'D':
    case 'd':
        console.log("A porta D foi aberta");
    break;
    default:
        console.log("ERRO SO COLOQUE AS LETRAS QUE ESTÃO SENDO MOSTRADAS NO MENU");
        break;
}