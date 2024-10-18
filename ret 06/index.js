const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const [um, dois, tres, ...resto] = numeros;

console.log(um, dois, tres);
console.log(resto);


const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numeros2[1][1]);;