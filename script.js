document.addEventListener('DOMContentLoaded', () => {
    console.log('El sitio está listo');
    
    const dishes = [
        { 
            name: 'Paella', 
            price: 15.99, 
            description: 'La paella es un plato tradicional de Valencia, hecho con arroz, mariscos, pollo y verduras.', 
            image: 'paella.png',
            ingredients: ['Arroz', 'Mariscos', 'Pollo', 'Verduras', 'Azafrán']
        },
        { 
            name: 'Tortilla Española', 
            price: 8.99, 
            description: 'La tortilla española es una tortilla de patatas y cebolla, muy popular en toda España.', 
            image: 'tortilla.png',
            ingredients: ['Patatas', 'Cebolla', 'Huevos', 'Aceite de oliva', 'Sal']
        },
        { 
            name: 'Gazpacho', 
            price: 6.99, 
            description: 'El gazpacho es una sopa fría de tomate, pepino, pimiento y ajo, originaria de Andalucía.', 
            image: 'gazpacho.png',
            ingredients: ['Tomate', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de oliva', 'Vinagre', 'Sal']
        },
        { 
            name: 'Churros', 
            price: 4.99, 
            description: 'Los churros son una masa frita, espolvoreada con azúcar, muy popular en España.', 
            image: 'churros.png',
            ingredients: ['Harina', 'Agua', 'Sal', 'Azúcar', 'Aceite para freír']
        },
        { 
            name: 'Patatas Bravas', 
            price: 5.99, 
            description: 'Las patatas bravas son patatas fritas servidas con una salsa picante.', 
            image: 'patatas_bravas.png',
            ingredients: ['Patatas', 'Aceite de oliva', 'Sal', 'Salsa brava']
        },
        { 
            name: 'Pulpo a la Gallega', 
            price: 12.99, 
            description: 'El pulpo a la gallega es un plato tradicional de Galicia, hecho con pulpo cocido, pimentón y aceite de oliva.', 
            image: 'pulpo_gallega.png',
            ingredients: ['Pulpo', 'Pimentón', 'Aceite de oliva', 'Sal']
        },
        { 
            name: 'Croquetas', 
            price: 7.99, 
            description: 'Las croquetas son pequeñas bolas fritas de bechamel con jamón o pollo.', 
            image: 'croquetas.png',
            ingredients: ['Bechamel', 'Jamón', 'Pollo', 'Pan rallado', 'Aceite para freír']
        },
        { 
            name: 'Pimientos de Padrón', 
            price: 4.99, 
            description: 'Los pimientos de Padrón son pequeños pimientos fritos, algunos de los cuales son muy picantes.', 
            image: 'pimientos_padron.png',
            ingredients: ['Pimientos de Padrón', 'Aceite de oliva', 'Sal']
        }
    ];

    const dishList = document.getElementById('dish-list');

    dishes.forEach(dish => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = dish.name;

        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `€${dish.price.toFixed(2)}`;

        listItem.appendChild(span);
        dishList.appendChild(listItem);

        listItem.addEventListener('click', () => {
            localStorage.setItem('selectedDish', JSON.stringify(dish));
            window.location.href = 'dish.html';
        });
    });
});