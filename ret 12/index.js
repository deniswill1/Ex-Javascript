const numeros = [1,2,3,4,5,6,7,8,9]

// Continue continua para próxima iteração
// Break sai do laço de repetição

for (let i = 0; i < numeros.length; i++){
    let numero = numeros[i];
    if (numero === 5 || numero === 8) {
        console.log('Pulei o número 5 e 8')
        continue;
    }

    if (numero === 7 ){
        console.log('7 encontrado, saindo...')
        break;
    }

    console.log(numero);
}