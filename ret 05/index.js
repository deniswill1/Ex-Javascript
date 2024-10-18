const verdadeira = true;
let nome = 'Denis'
const nome2 = 'Iara'

const nom = 'Disney' // Variável Redeclarada

if (verdadeira) {
    let nome = 'Maria' // Escopo em Bloco
    console.log(nome, nome2);

    if (verdadeira) {
    let nome = 'Fernando' // Escopo em Bloco
    console.log(nome, nome2);
    }
}

console.log(nome)