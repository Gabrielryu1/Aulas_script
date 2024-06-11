const ler = require('readline-sync');

console.log("---------------- MENU ---------------------");
console.log("*** Informe o valor do empréstimo: ***");
let valor = ler.questionFloat("=> ");

console.clear();
console.log("------------------ MENU OPÇÕES ----------------");
console.log("1. PIX \n2. DÉBITO \n3. CRÉDITO \n4. DINHEIRO ");
console.log("-----------------------------------------------");
let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 1:
        result = valor + valor * 0.10;
        console.log("PIX acréscimo de 10%");
        console.log(`Realizando o pagamento via PIX, o valor ficará em R$ ${result.toFixed(2)}`);
        break;
    case 2:
        result = valor + valor * 0.05;
        console.log("Débito acréscimo de 5%");
        console.log(`Realizando o pagamento no Débito, o valor ficará em R$ ${result.toFixed(2)}`);
        break;
    case 3:
        result = valor + valor * 0.20;
        console.log("Crédito acréscimo de 20%");
        console.log(`Realizando o pagamento no Crédito, o valor ficará em R$ ${result.toFixed(2)}`);
        
        let parcelas = ler.questionInt("Quantas parcelas? ");
        if (parcelas > 0) {
            let valorParcela = result / parcelas;
            console.log(`O valor será dividido em ${parcelas} parcelas de R$ ${valorParcela.toFixed(2)}`);
        } else {
            console.log("Número de parcelas inválido! Deve ser maior que 0.");
        }
        break;
    case 4:
        result = valor;
        console.log("Pagamento em Dinheiro (sem acréscimo)");
        console.log(`Realizando o pagamento em Dinheiro, o valor ficará em R$ ${result.toFixed(2)}`);
        break;
    default:
        console.log("Opção inválida! Digite um número entre 1 e 4.");
        break;
}
