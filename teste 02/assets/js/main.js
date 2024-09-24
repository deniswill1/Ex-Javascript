const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const diaSemana = data.getDay();
const horas = data.getHours();
const min = data.getMinutes();
const sec = data.getSeconds();

function zeroAEsqueda (num) {
    return num >= 10 ? num : `0${num}`
}

function getDiaSemana (diaSemana) {
let diaDaSemanaTexto;

    switch (diaSemana){
        case 0:
            diaDaSemanaTexto = 'Domingo'
            return diaDaSemanaTexto
        case 1:
            diaDaSemanaTexto = 'Segunda-Feira'
            return diaDaSemanaTexto
        case 2:
            diaDaSemanaTexto = 'Terça-Feira'
            return diaDaSemanaTexto
        case 3:
            diaDaSemanaTexto = 'Quarta-Feira'
            return diaDaSemanaTexto
        case 4:
            diaDaSemanaTexto = 'Quinta-Feira'
            return diaDaSemanaTexto
        case 5:
            diaDaSemanaTexto = 'Sexta-Feira'
            return diaDaSemanaTexto
        case 6:
            diaDaSemanaTexto = 'Sábado'
            return diaDaSemanaTexto
            default:
                return diaDaSemanaTexto = '';
    }

    return diaDaSemanaTexto
    
}

function getMes (mes) {
    let mesDoAno;

    switch (mes) {
        case 0:
            mesDoAno = 'Janeiro'
            return mesDoAno
        case 1:
            mesDoAno = 'Fevereiro'
            return mesDoAno
        case 2:
            mesDoAno = 'Março'
            return mesDoAno
        case 3:
            mesDoAno = 'Abril'
            return mesDoAno
        case 4:
            mesDoAno = 'Maio'
            return mesDoAno
        case 5:
            mesDoAno = 'Junho'
            return mesDoAno
        case 6:
            mesDoAno = 'Julho'
            return mesDoAno
        case 7:
            mesDoAno = 'Agosto'
            return mesDoAno
        case 8:
            mesDoAno = 'Setembro'
            return mesDoAno
        case 9:
            mesDoAno = 'Outubro'
            return mesDoAno
        case 10:
            mesDoAno = 'Novembro'
            return mesDoAno
        case 11:
            mesDoAno = 'Dezembro'
            return mesDoAno
    }

    return mesDoAno
}

const mesDoAno = getMes(mes);
const diaDaSemanaTexto = getDiaSemana(diaSemana);

const texto = document.querySelector('.data')

texto.innerHTML = `${diaDaSemanaTexto}, ${zeroAEsqueda(dia)} de ${mesDoAno} de ${ano} ${zeroAEsqueda(horas)}:${zeroAEsqueda(min)}`

// const textodata = document.querySelector('.data');
// const data = new Date();

// textodata.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle:'short'})