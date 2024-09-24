// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000; // Um dia em Milesimos de segundo
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString())


// const data = new Date(2024, 1, 20, 15, 14, 27);
// const data = new Date('2024-02-20 20:20:59')
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Horas', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Dia da Semana', data.getDay()); // 0 - domingo, 6 - Sábado
// console.log(data.toString());

// console.log(Date.now())

function zeroAEsqueda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    // console.log(data);
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth() + 1);
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());
    const seg = zeroAEsqueda(data.getSeconds());

    return `${dia}/${mes}/${ano}, ${hora}:${min}:${seg}`



    
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)