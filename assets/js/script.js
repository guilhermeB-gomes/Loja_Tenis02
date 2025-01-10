'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // Selecionar todos os botões de filtro
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Selecionar todos os itens de produtos
  const productItems = document.querySelectorAll('.product-item');

  // Função para aplicar o filtro
  function filterProducts(filter) {
    productItems.forEach(item => {
      const brand = item.getAttribute('data-brand').toLowerCase();
      
      // Mostrar todos os produtos quando "all" é selecionado, ou produtos correspondentes à marca
      if (filter === 'all' || brand === filter) {
        item.style.display = ''; // Exibe o produto
      } else {
        item.style.display = 'none'; // Oculta o produto
      }
    });
  }

  // Atribuir eventos de clique a todos os botões de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove a classe 'active' de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Adiciona a classe 'active' ao botão clicado
      this.classList.add('active');
      
      // Obter o valor do filtro
      const filter = this.getAttribute('data-filter');
      
      // Aplicar o filtro
      filterProducts(filter);
    });
  });

  // Filtragem inicial para garantir que o filtro 'all' mostre todos os produtos
  filterProducts('all');
});

