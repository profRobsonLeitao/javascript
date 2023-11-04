const paragrafos = document.querySelectorAll('p');

// getComputedStyle retorna todo css aplicado na pagina
const estiloBody = getComputedStyle(document.body);
// pegando a cor de bg do body
const bgColorBody = estiloBody.backgroundColor;

for (const p of paragrafos) {
    p.style.backgroundColor = bgColorBody;
    p.style.color = '#fff';
}

