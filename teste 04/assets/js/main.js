const paragrafos = document.querySelector('.paragrafos');
const paragrafosDiv = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let p of paragrafosDiv) {
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'White';
}