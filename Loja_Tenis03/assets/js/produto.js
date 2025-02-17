function filterProducts(category) {
    // Pegar todos os cards de produto
    const products = document.querySelectorAll('.product-card');
    
    // Se a categoria for 'todos', exibe todos os produtos
    if (category === 'todos') {
      products.forEach(product => {
        product.style.display = 'block';
      });
    } else {
      // Se não, filtra os produtos pela categoria
      products.forEach(product => {
        if (product.classList.contains(category)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  }
  