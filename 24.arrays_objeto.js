//let numeros = {};
//console.log(typeof);

let cliente = {
nome:"Fulano",
idade:34

};

console.log(`Nome: ${cliente.nome} - idade:${cliente.idade}`);
cliente.telefone = "(31) 12345-1234"

console.log(`Nome: ${cliente.nome} - idade:${cliente.idade} - tel: ${cliente.telefone}`);

delete cliente.idade;