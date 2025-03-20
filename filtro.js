const produtos = [
    { id: 1, nome: "Nike Air Max", marca: "Nike", cor: "Preto", tipo: "Esportivo", genero: "Masculino", imagem: "./assets/images/nike.jpg", preco: 499.99 },
    { id: 2, nome: "Adidas Ultraboost", marca: "Adidas", cor: "Branco", tipo: "Casual", genero: "Unissex", imagem: "./assets/images/adidas ultraboost.jpg", preco: 599.99 },
    { id: 3, nome: "Puma Future Rider", marca: "Puma", cor: "Azul", tipo: "Casual", genero: "Unissex", imagem: "./assets/images/Puma Future Rider.jpg", preco: 299.99 },
    { id: 4, nome: "Nike Zoom", marca: "Nike", cor: "Preto", tipo: "Esportivo", genero: "Masculino", imagem: "./assets/images/Nike Zoom.jpg", preco: 449.99 },
    { id: 5, nome: "Adidas Superstar", marca: "Adidas", cor: "Branco", tipo: "Casual", genero: "Feminino", imagem: "./assets/images/Adidas Superstar.jpg", preco: 379.99 },
    { id: 6, nome: "Puma RS-X", marca: "Puma", cor: "Azul", tipo: "Feminino", genero: "Feminino", imagem: "./assets/images/Puma RS-X.jpg", preco: 359.99 },
    { id: 7, nome: "Nike Free Run", marca: "Nike", cor: "Preto", tipo: "Casual", genero: "Masculino", imagem: "./assets/images/Nike Free Run.jpg", preco: 399.99 },
    { id: 8, nome: "Nike Air Force 1", marca: "Nike", cor: "Branco", tipo: "Casual", genero: "Masculino", imagem: "./assets/images/Nike Air Force 1.jpg", preco: 499.99 },
    { id: 9, nome: "Adidas NMD", marca: "Adidas", cor: "Preto", tipo: "Casual", genero: "Unissex", imagem: "./assets/images/Adidas NMD.jpg", preco: 489.99 }
];

// Filtros
const marcaFiltro = document.getElementById("marca");
const corFiltro = document.getElementById("cor");
const tipoFiltro = document.getElementById("tipo");
const generoFiltro = document.getElementById("genero");
const searchInput = document.getElementById("search");

// Função para filtrar produtos
function filtrarProdutos() {
    let filtroMarca = marcaFiltro.value;
    let filtroCor = corFiltro.value;
    let filtroTipo = tipoFiltro.value;
    let filtroGenero = generoFiltro.value;
    let pesquisa = searchInput.value.toLowerCase(); // Captura o valor da pesquisa e converte para minúsculo

    const produtosFiltrados = produtos.filter(produto => {
        return (
            (filtroMarca ? produto.marca === filtroMarca : true) &&
            (filtroCor ? produto.cor === filtroCor : true) &&
            (filtroTipo ? produto.tipo === filtroTipo : true) &&
            (filtroGenero ? produto.genero === filtroGenero : true) &&
            (produto.nome.toLowerCase().includes(pesquisa)) // Verifica se o nome do produto contém o texto de pesquisa
        );
    });

    exibirProdutos(produtosFiltrados);
}

// Função para exibir produtos
function exibirProdutos(produtosExibidos) {
    const produtosContainer = document.getElementById("produtos");
    produtosContainer.innerHTML = ""; // Limpa os produtos exibidos

    if (produtosExibidos.length === 0) {
        produtosContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
    } else {
        produtosExibidos.forEach(produto => {
            const card = document.createElement("article");
            card.classList.add("card");

            // Adicionando o evento de clique para redirecionar para a página de detalhes
            card.onclick = function() {
                window.location.href = `detalhes.html?id=${produto.id}`; // Redireciona para detalhes.html passando o id do produto
            };

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <div class="card__details">
                    <p>Marca: ${produto.marca}</p>
                    <p>Cor: ${produto.cor}</p>
                    <p>Tipo: ${produto.tipo}</p>
                    <p>Gênero: ${produto.genero}</p>
                </div>
                <p class="card__price">R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="adicionarFavorito(${produto.id})">Adicionar aos Favoritos</button>
            `;
            produtosContainer.appendChild(card);
        });
    }
}


// Função para adicionar aos favoritos
function adicionarFavorito(produtoId) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const produto = produtos.find(p => p.id === produtoId);

    if (!favoritos.some(fav => fav.id === produtoId)) {
        favoritos.push(produto);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert("Produto adicionado aos favoritos!");
    } else {
        alert("Produto já está nos favoritos!");
    }
}

// Exibe todos os produtos inicialmente
exibirProdutos(produtos);

// Adiciona eventos para os filtros
marcaFiltro.addEventListener("change", filtrarProdutos);
corFiltro.addEventListener("change", filtrarProdutos);
tipoFiltro.addEventListener("change", filtrarProdutos);
generoFiltro.addEventListener("change", filtrarProdutos);

// Adiciona evento para a busca
searchInput.addEventListener("input", filtrarProdutos);

// Obtém o botão de favoritos
const favoritosBtn = document.getElementById("favoritos-btn");

// Adiciona um evento de clique para redirecionar para a página de favoritos
favoritosBtn.addEventListener("click", function() {
    window.location.href = "favoritos.html"; // Redireciona para favoritos.html
});

// Obtendo os elementos do menu e do botão de fechar
const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");
const closeMenuBtn = document.getElementById("close-menu-btn");

// Função para abrir o menu
menuBtn.addEventListener("click", () => {
    menuMobile.classList.add("open");
});

// Função para fechar o menu
closeMenuBtn.addEventListener("click", () => {
    menuMobile.classList.remove("open");
});


