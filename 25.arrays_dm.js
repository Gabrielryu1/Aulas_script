let animais = ["gato","cachorro","girafa","leao","macaco","elefante"];

let numeros = [12, 34, 51, 5, 8, 11, 78, 41, 23, 1];

console.log("----Exibindo os itens iniciais dos arrays ------------");
console.log(animais);
console.log(numeros);

// adicionar um valor no final do array
animais.push("coelho");
numeros.push(88);
console.log("--- exibindo com novos dados nos arrays--------------");
console.log(animais);
console.log(numeros);

//Excluir um valor no inicio do array
animais.pop("Jacare");
numeros.pop("Pop");
console.log("--- exibindo com novos dados nos arrays--------------");
console.log(animais);
console.log(numeros);

//adicionar um valor no final do array
animais.unshift("jacare");
numeros.unshift(99);
console.log("--- exibindo com novos dados nos arrays--------------");
console.log(animais);
console.log(numeros);


//Excluir um valor no inicio do array
animais.shift();
numeros.shift();
console.log("--- exibindo arrays sem os primeiros dados------------");
console.log(animais);
console.log(numeros);

//Organizar os dados do array em ordem alfabetica
animais.sort(); 
numeros.sort((a, b) => a - b); 
console.log("--- exibindo arrays em ordem alfabetica--------------");
console.log(animais);
console.log(numeros);

//Organizar os dados do array em ordem contraria
animais.reverse();
numeros.reverse();
console.log("--- exibindo arrays em dados invertidos--------------");
console.log(animais);
console.log(numeros);
