const nome = ['Denis Willian', 'Henrique', 'Luiz'];

// FOR NORMAL (Quando você precisa de controle rigoroso sobre a indexação ou um loop específico.)
// Arrays, Strings
for ( let i = 0; i < nome.length; i++ ) {
    console.log(nome[i])
}

console.log('-------')

// FOR IN (Quando você está lidando com um objeto e precisa acessar diretamente suas propriedades (chaves).)
// Strings, Arrays, Objetos
for ( let i in nome) {
    console.log(nome[i])
}

console.log('-------')

//FOR OF (Quando você trabalha com arrays ou outras estruturas iteráveis, e seu principal interesse são os valores.)
// Arrays, Strings
for (let valor of nome) {
    console.log(valor);
}

console.log('-------')

// FOR EACH
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});