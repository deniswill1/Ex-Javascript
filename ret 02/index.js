const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal' 

/*if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP')
} else {
    console.log('Usuário Normal')
}*/

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto'

console.log(nivelUsuario, corPadrao)
