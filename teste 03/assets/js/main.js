const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    
    const conteudo = document.querySelector('.container');

    const novoConteudo = document.createElement(tag);
    
    novoConteudo.innerHTML = texto;
    conteudo.appendChild(novoConteudo);

}