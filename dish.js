document.addEventListener('DOMContentLoaded', () => {
    const dishDetail = document.getElementById('dish-detail');
    const selectedDish = JSON.parse(localStorage.getItem('selectedDish'));

    if (selectedDish) {
        const dishContent = `
            <div class="card mx-auto" style="width: 36rem;">
                <img src="assets/${selectedDish.image}" class="card-img-top" alt="${selectedDish.name}">
                <div class="card-body text-center">
                    <h2 class="card-title">${selectedDish.name}</h2>
                    <p class="card-text">${selectedDish.description}</p>
                    <p class="card-text"><strong>Precio: €${selectedDish.price.toFixed(2)}</strong></p>
                    <h3>Ingredientes</h3>
                    <ul class="list-group list-group-flush">
                        ${selectedDish.ingredients.map(ingredient => `<li class="list-group-item">${ingredient}</li>`).join('')}
                    </ul>
                    <button id="back-button" class="btn btn-primary mt-3">Retrocede</button>
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