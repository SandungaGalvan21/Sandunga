let currentIndex = 0;
const productGrid = document.querySelector('.product-grid');
const products = document.querySelectorAll('.product-item');
const visibleItems = 6; // Número de productos visibles
const totalItems = products.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    // Solo avanza si hay productos adicionales a la derecha
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateCarousel();
    }
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    // Solo retrocede si no estamos en la primera posición
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    // Calcula el desplazamiento en porcentaje para mover un producto a la vez
    const offset = currentIndex * -100 / visibleItems;
    productGrid.style.transform = `translateX(${offset}%)`;
}
