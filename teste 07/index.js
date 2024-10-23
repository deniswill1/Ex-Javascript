function numerosDivisiveis(numero) {
  if (typeof numero !== "number" || isNaN(numero))
    return "Coloque um número válido";
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 5 === 0) return "Fizz";
  if (numero % 3 === 0) return "Buzz";
  return `Não Divisivel por 3 ou 5`;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, numerosDivisiveis(i));
}

console.log(numerosDivisiveis("Olá"));
console.log(numerosDivisiveis(NaN));
