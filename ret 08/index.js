// Valor crescente no laço de repetição
for ( let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`)
}

// Valor decrescento no laço de repetição
for ( let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`)
}

// verificar validação se o número é par dentro do laço de repetição
for ( let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par)
}

const frutas = ['Maçã', 'Pera', 'Uva', 'Denis', 'Miranda'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i])
}