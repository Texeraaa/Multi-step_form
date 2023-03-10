const circulos = document.querySelectorAll("[data-circulo]");
const cards = document.querySelectorAll("[data-card]");

console.log(circulos)

circulos.forEach((circulo, index) => {
    circulo.addEventListener("click", () => {
        circulos.forEach(removeClass => removeClass.classList.remove('ativo'));
        cards.forEach(removeClass => removeClass.classList.remove('card-ativo'))

        circulo.classList.add('ativo')
        

    console.log(`Clicou no passo ${index + 1}`);
    })
})
