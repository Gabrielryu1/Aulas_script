const ler = require('readline-sync');

let frutas = [];
let bancoDeDadosFrutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "manga", "melancia", "morango", "kiwi", "pêssego"];
let check = true;

while (check) {
    let fruta = ler.question("Informe um nome de uma fruta, digite '0' para uma fruta aleatoria, ou 'sair' para finalizar: ").toLowerCase();
    
    if (fruta === 'sair') {
        check = false;
    } else if (fruta === '0') {
        let frutaAleatoria = bancoDeDadosFrutas[Math.floor(Math.random() * bancoDeDadosFrutas.length)];
        frutas.push(frutaAleatoria);
        console.log(`Fruta aleatória adicionada: ${frutaAleatoria}`);
    } else {    
        frutas.push(fruta);
    }
}

console.log("Frutas informadas: ", frutas);
