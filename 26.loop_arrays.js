//Exibindo os dados do array utilizando loop for 

let animais = ["gato","cachorro","girafa","leao","macaco","elefante"];

let numeros = [12, 34, 51, 5, 8, 11, 78, 41, 23, 1];


console.log("----------- listando os animais do array -----------");
for (let i = 0; i < animais.length; i++) {
  
    console.log(`=> ${animais[i]}`);
}

console.log("--------- listando os numeros do array --------------");
for (let i = 0; i < numeros.length; i++) {
    
    console.log(`Valor => ${numeros[i]}`);

}