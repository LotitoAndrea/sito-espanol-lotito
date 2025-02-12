document.addEventListener('DOMContentLoaded', () => {
    console.log('El sitio está listo');
    
    const dishes = [
        { name: 'Paella', price: 15.99, description: 'La paella es un plato tradicional de Valencia, hecho con arroz, mariscos, pollo y verduras.', image: 'paella.jpg' },
        { name: 'Tortilla Española', price: 8.99, description: 'La tortilla española es una tortilla de patatas y cebolla, muy popular en toda España.', image: 'tortilla.jpg' },
        { name: 'Gazpacho', price: 6.99, description: 'El gazpacho es una sopa fría de tomate, pepino, pimiento y ajo, originaria de Andalucía.', image: 'gazpacho.jpg' },
        { name: 'Churros', price: 4.99, description: 'Los churros son una masa frita, espolvoreada con azúcar, muy popular en España.', image: 'churros.jpg' }
    ];

    const dishList = document.getElementById('dish-list');

    dishes.forEach(dish => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = dish.name;

        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `$${dish.price.toFixed(2)}`;

        listItem.appendChild(span);
        dishList.appendChild(listItem);

        listItem.addEventListener('click', () => {
            localStorage.setItem('selectedDish', JSON.stringify(dish));
            window.location.href = 'dish.html';
        });
    });
});