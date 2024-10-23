function numeroMaior(num1, num2) {
    if (num1 > num2) {
        return `O maior número é o primeiro. VALOR: ${num1}`
    } if(num1 < num2) {
        return `O maior número é o segundo. VALOR: ${num2}`
    } if (num1 === num2) {
        return `Os números são iguais. VALOR 1: ${num1} e VALOR 2: ${num2}`
    }
}

const executarFuncao = numeroMaior(1000, 1000);

console.log(executarFuncao);