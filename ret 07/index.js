const pessoa = {
    nome: 'Denis',
    idade: 26,
    cidade: 'Salvador - BA',
};

// Atribuição via desestruturação
// Consigo resgatar dentro de um objeto um dado atráves das chaves abaixo
// Consigo dar input de um novo valor a variavel usando o = funcionando também dentro de arrays
const { nome, ...resto } = pessoa;

// Consigo atribuir um novo nome para a variável e alterar o valor do mesmo
const {idade: anos = ''} = pessoa;

console.log(resto);