document.addEventListener('DOMContentLoaded', () => {
    const dishDetail = document.getElementById('dish-detail');
    const selectedDish = JSON.parse(localStorage.getItem('selectedDish'));

    if (selectedDish) {
        const dishContent = `
            <h2>${selectedDish.name}</h2>
            <img src="assets/${selectedDish.image}" alt="${selectedDish.name}" class="img-fluid mb-3">
            <p>${selectedDish.description}</p>
            <p><strong>Precio: $${selectedDish.price.toFixed(2)}</strong></p>
        `;
        dishDetail.innerHTML = dishContent;
    } else {
        dishDetail.innerHTML = '<p>No se ha seleccionado ningún plato.</p>';
    }

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});