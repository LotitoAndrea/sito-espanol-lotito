document.addEventListener('DOMContentLoaded', () => {
    const dishDetail = document.getElementById('dish-detail');
    const selectedDish = JSON.parse(localStorage.getItem('selectedDish'));

    if (selectedDish) {
        const dishContent = `
            <div class="card mx-auto" style="width: 24rem;">
                <img src="assets/${selectedDish.image}" class="card-img-top" alt="${selectedDish.name}">
                <div class="card-body text-center">
                    <h2 class="card-title">${selectedDish.name}</h2>
                    <p class="card-text">${selectedDish.description}</p>
                    <p class="card-text"><strong>Precio: $${selectedDish.price.toFixed(2)}</strong></p>
                    <button id="back-button" class="btn btn-primary mt-3">Torna indietro</button>
                </div>
            </div>
        `;
        dishDetail.innerHTML = dishContent;

        const backButton = document.getElementById('back-button');
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    } else {
        dishDetail.innerHTML = '<p>No se ha seleccionado ningún plato.</p>';
    }
});