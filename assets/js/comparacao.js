function applyFilters() {
    const brandFilter = document.getElementById('brand').value.toLowerCase();
    const priceFilter = document.getElementById('price-range').value.toLowerCase();
    const sneakers = document.querySelectorAll('.sneaker');

    sneakers.forEach(sneaker => {
        const sneakerBrand = sneaker.getAttribute('data-brand').toLowerCase();
        const sneakerPrice = parseFloat(sneaker.getAttribute('data-price'));

        // Filtrando por marca
        const brandMatch = brandFilter ? sneakerBrand === brandFilter : true;

        // Filtrando por preço
        let priceMatch = true;
        if (priceFilter === 'under-100') {
            priceMatch = sneakerPrice < 100;
        } else if (priceFilter === '100-200') {
            priceMatch = sneakerPrice >= 100 && sneakerPrice <= 200;
        } else if (priceFilter === 'above-200') {
            priceMatch = sneakerPrice > 200;
        }

        // Mostrar ou esconder com base nos filtros
        if (brandMatch && priceMatch) {
            sneaker.style.display = '';
        } else {
            sneaker.style.display = 'none';
        }
    });
}
