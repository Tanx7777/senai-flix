const dados = {
    filmes: [
        { titulo: "É Assim Que Acaba", imagem: "../assets/imgs/eassimqueacaba.webp", genero: ["drama", "romance"] },
        { titulo: "Bad Boys: Para Sempre", imagem: "../assets/imgs/badboys.webp", genero: ["ação", "comedia"] },
        { titulo: "Um Lugar Silencioso: Dia Um", imagem: "../assets/imgs/umlugarsilencioso.webp", genero: ["ficção", "terror", "misterio"] },
        { titulo: "Venom", imagem: "../assets/imgs/venom.webp", genero: ["ação", "ficção"] },
        { titulo: "Deadpool & Wolverine", imagem: "../assets/imgs/deadpoolewolverine.webp", genero: ["ação", "comedia", "ficção"] },
        { titulo: "Divertida Mente 2", imagem: "../assets/imgs/divertidamente.webp", genero: ["ficção", "animação", "aventura", "comedia"] },
    ],        
    series: [
        { titulo: "Guerra dos Tronos", imagem: "../assets/imgs/gameofthrones.webp", genero: ["ficção", "aventura", "ação", "Fantasia"] },
        { titulo: "Sobrenatural", imagem: "../assets/imgs/sobrenatural.webp", genero: ["ficção", "terror", "misterio", "drama", "thriller"] },
        { titulo: "Grey's Anatomy", imagem: "../assets/imgs/greysanatomy.webp", genero: ["drama", "romance"] },
        { titulo: "Prison Break", imagem: "../assets/imgs/prisonbreak.webp", genero: ["ação", "drama", "misterio", "Crime"] },
        { titulo: "O Senhor dos Anéis: Os Anéis de Poder", imagem: "../assets/imgs/osenhordosaneis.webp", genero: ["ficção", "aventura", "Sci-Fi & Fantasy"] },
        { titulo: "O Segredo do Rio", imagem: "../assets/imgs/osegredodorio.webp", genero: ["drama", "misterio"] },
    ]        
};

const filmesCards = document.querySelectorAll("#filmes-container a");
const seriesCards = document.querySelectorAll("#series-container a");
const selectGenero = document.getElementById("genero");
const btnLimpar = document.getElementById("limpar-filtro");

document.addEventListener("DOMContentLoaded", function () {

    function renderizar(cards, lista, filtro = "todos") {
        cards.forEach((card, index) => {
            const item = lista[index];
            const generos = item.genero;
            const correspondeFiltro = filtro === "todos" || generos.includes(filtro);

            if (item && correspondeFiltro) {
                card.style.display = "block";
                card.style.backgroundImage = `url(${item.imagem})`
                card.style.backgroundSize = "cover";
                card.style.backgroundPosition = "center";
            } else {
                card.style.display = "none";
            }
        })
    }

    function aplicarFiltro(generoSelecionado) {
        renderizar(filmesCards, dados.filmes, generoSelecionado);
        renderizar(seriesCards, dados.series, generoSelecionado);
    }

    selectGenero.addEventListener("change", function () {
        aplicarFiltro(this.value);
    })
if(btnLimpar) {
    btnLimpar.addEventListener("click", function () {
        selectGenero.selectedIndex =0;
        aplicarFiltro("todos");

    })
}
    aplicarFiltro("todos");

})

const inputPesquisar = document.getElementById("pesquisar");

if (inputPesquisar) {
    inputPesquisar.addEventListener("input", function () {
        const palavraDigitada = this.value.toLowerCase();

        // Aplica o filtro de texto em filmes
        filmesCards.forEach((card, index) => {
            const titulo = dados.filmes[index].titulo.toLowerCase();
            const corresponde = titulo.includes(palavraDigitada);
            card.style.display = corresponde ? "block" : "none";
        });

        // Aplica o filtro de texto em séries
        seriesCards.forEach((card, index) => {
            const titulo = dados.series[index].titulo.toLowerCase();
            const corresponde = titulo.includes(palavraDigitada);
            card.style.display = corresponde ? "block" : "none";
        });

        // Limpa o select para evitar conflito com filtro de gênero
        selectGenero.selectedIndex = 0;
    });
}

const btnMenu = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");

btnMenu.addEventListener("click", () => {
    menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
})



