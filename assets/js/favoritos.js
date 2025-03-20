const produtosFavoritosContainer = document.getElementById("produtos-favoritos");
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

if (favoritos.length === 0) {
    produtosFavoritosContainer.innerHTML = "<p>Você não tem produtos favoritos ainda.</p>";
} else {
    favoritos.forEach(produto => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card__img" src="${produto.imagem}" alt="${produto.nome}">
            <h3 class="card__name">${produto.nome}</h3>
            <div class="card__precis">
                <p>Marca: ${produto.marca}</p>
                <p>Cor: ${produto.cor}</p>
                <p>Tipo: ${produto.tipo}</p>
                <p>Gênero: ${produto.genero}</p>
            </div>
            <p class="card__price">R$ ${produto.preco.toFixed(2)}</p>
            <button class="remove-btn" onclick="removerFavorito(${produto.id})">Retirar</button>
        `;
        produtosFavoritosContainer.appendChild(card);
    });
}

// Função para remover produto dos favoritos
function removerFavorito(produtoId) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(produto => produto.id !== produtoId);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    window.location.reload(); // Recarrega a página para refletir as mudanças
}
