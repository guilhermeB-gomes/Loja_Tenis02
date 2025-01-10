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
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');

  // Adiciona um evento de clique a cada botão de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove a classe 'active' de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Adiciona a classe 'active' ao botão clicado
      button.classList.add('active');

      const filter = button.textContent.trim().toLowerCase();

      // Mostra ou oculta os itens de produtos com base no filtro
      productItems.forEach(item => {
        const brand = item.getAttribute('data-brand').toLowerCase();
        if (filter === 'all' || filter === brand) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});
