const form = document.querySelector('#formulario')

form.addEventListener ('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#input-peso');
    const inputAltura = e.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg =`Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true);

    

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1',
        'Obesidade Grau 2', 'Obesidade Grau 3']

        if (imc >= 39.9) return nivel[5];
        
        if (imc >= 34.9) return nivel[4];
        
        if ( imc >= 29.9) return nivel[3];
        
        if ( imc >= 24.9 ) return nivel [2];
        
        if ( imc >= 18.5 ) return nivel[1];
        
        if ( imc <= 18.5 ) return nivel[0];

}


function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}






function criaP () {
    const p = document.createElement('p');
    return p;
}


function setResultado (msg, isValid, imc) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
    
    
    if (imc >= 39.9 && isValid) {
        p.classList.add('paragrafo-obesidade');
    } else if ( imc <= 18.5 && isValid) {
        p.classList.add('paragrafo-normal')
    } else {
        p.classList.add('paragrafo-bad')
    }

   

    
    p.innerHTML = msg;
    resultado.appendChild(p);
}


// function corImc (imc) {

//     if (imc >= 39.9 ) {
//         p.classList.add('paragrafo-obesidade')
    // } else if ( imc >= 34.9) {
    //     p.classList.add('paragrafo-obesidade')
    // } else if ( imc >= 29.9) {
//         p.classList.add('paragrafo-obesidade')
//     } else if ( imc >= 24.9) {
//         p.classList.add('paragrafo-sobrepeso-abaixo')
//     } else if ( imc >= 18.5) {
//         p.classList.add('paragrafo-normal')
//     } else if ( imc <= 18.5) {
//         p.classList.add('paragrafo-sobrepeso-abaixo')
//     }
// }







