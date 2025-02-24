// Dados dos produtos (incluindo a nova categoria "Gênero")
const produtos = [
    { id: 1, nome: "Nike Air Max", marca: "Nike", cor: "Preto", tipo: "Esportivo", genero: "Masculino", imagem: "../assets/images/nike.jpg" },
    { id: 2, nome: "Adidas Ultraboost", marca: "Adidas", cor: "Branco", tipo: "Casual", genero: "Unissex", imagem: "../assets/images/adidas ultraboost.jpg" },
    { id: 3, nome: "Puma Future Rider", marca: "Puma", cor: "Azul", tipo: "Casual", genero: "Unissex", imagem: "https://via.placeholder.com/200" },
    { id: 4, nome: "Nike Zoom", marca: "Nike", cor: "Preto", tipo: "Esportivo", genero: "Masculino", imagem: "../assets/images/Nike Zoom.jpg" },
    { id: 5, nome: "Adidas Superstar", marca: "Adidas", cor: "Branco", tipo: "Casual", genero: "Feminino", imagem: "https://via.placeholder.com/200" },
    { id: 6, nome: "Puma RS-X", marca: "Puma", cor: "Azul", tipo: "Feminino", genero: "Feminino", imagem: "https://via.placeholder.com/200" },
    { id: 7, nome: "Nike Free Run", marca: "Nike", cor: "Preto", tipo: "Casual", genero: "Masculino", imagem: "https://via.placeholder.com/200" },
    { id: 8, nome: "Nike Air Force 1", marca: "Nike", cor: "Branco", tipo: "Casual", genero: "Masculino", imagem: "https://via.placeholder.com/200" },
    { id: 9, nome: "Adidas NMD", marca: "Adidas", cor: "Preto", tipo: "Casual", genero: "Unissex", imagem: "https://via.placeholder.com/200" }
];

// Selecionando os elementos HTML para manipulação
const searchInput = document.getElementById("search");
const marcaSelect = document.getElementById("marca");
const corSelect = document.getElementById("cor");
const tipoSelect = document.getElementById("tipo");
const generoSelect = document.getElementById("genero"); // Novo filtro "Gênero"
const produtosContainer = document.getElementById("produtos");

// Função para filtrar e mostrar os produtos
function mostrarProdutos() {
    // Pegando os valores dos filtros
    const searchValue = searchInput.value.toLowerCase();
    const marcaValue = marcaSelect.value.toLowerCase();
    const corValue = corSelect.value.toLowerCase();
    const tipoValue = tipoSelect.value.toLowerCase();
    const generoValue = generoSelect.value.toLowerCase(); // Pegando o valor do filtro "Gênero"

    // Filtrando os produtos
    const produtosFiltrados = produtos.filter(produto => {
        return (
            produto.nome.toLowerCase().includes(searchValue) &&
            (marcaValue ? produto.marca.toLowerCase() === marcaValue : true) &&
            (corValue ? produto.cor.toLowerCase() === corValue : true) &&
            (tipoValue ? produto.tipo.toLowerCase() === tipoValue : true) &&
            (generoValue ? produto.genero.toLowerCase() === generoValue : true) // Aplicando o filtro de "Gênero"
        );
    });

    // Exibindo os produtos filtrados
    produtosContainer.innerHTML = '';
    produtosFiltrados.forEach(produto => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card__img" src="${produto.imagem}" alt="${produto.nome}">
            <h3 class="card__name">${produto.nome}</h3>
            <div class="card__precis">
                <div class="card__preci">
                    <p class="card__preci--before">Marca:</p>
                    <p>${produto.marca}</p>
                </div>
                <div class="card__preci">
                    <p class="card__preci--before">Cor:</p>
                    <p>${produto.cor}</p>
                </div>
                <div class="card__preci">
                    <p class="card__preci--before">Tipo:</p>
                    <p>${produto.tipo}</p>
                </div>
                <div class="card__preci">
                    <p class="card__preci--before">Gênero:</p>
                    <p>${produto.genero}</p> <!-- Exibindo o gênero -->
                </div>
            </div>
        `;
        // Adicionando um evento de clique ao card para redirecionar para a página de detalhes
        card.addEventListener("click", () => {
            window.location.href = `detalhes.html?id=${produto.id}`;  // Redireciona para detalhes.html com o id do produto
        });

        produtosContainer.appendChild(card);
    });
}

// Adicionando eventos para cada filtro
searchInput.addEventListener("input", mostrarProdutos);
marcaSelect.addEventListener("change", mostrarProdutos);
corSelect.addEventListener("change", mostrarProdutos);
tipoSelect.addEventListener("change", mostrarProdutos);
generoSelect.addEventListener("change", mostrarProdutos); // Evento para o filtro "Gênero"

// Mostrar os produtos ao carregar a página
mostrarProdutos();
