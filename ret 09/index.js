const frutas = ['Maçã', 'Pera', 'Morango', 'Abacaxi', 'Laranja']

const pessoa = {
    nome: 'Denis',
    idade: 26,
    cidade: 'Salvador',

}


// Acessando valores de formas diferentes
console.log(pessoa.nome);
console.log(pessoa['nome']);


// LAÇO DE REPETIÇÃO COM CONTAGEM
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// o (i) pode ser chamada de qualquer nome
// For in lê os índices ou chaves do objeto
for (let vasco in frutas) {
    console.log(frutas[vasco]);
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}