// filepath: /spanish-food-website/spanish-food-website/src/scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const dishList = document.getElementById('dish-list');

    const dishes = [
        { name: 'Paella', description: 'A traditional Spanish rice dish with seafood and saffron.' },
        { name: 'Tacos', description: 'Soft or hard shell filled with various ingredients.' },
        { name: 'Gazpacho', description: 'A cold soup made of blended vegetables, perfect for summer.' },
        { name: 'Churros', description: 'Fried dough pastries, often served with chocolate sauce.' }
    ];

    dishes.forEach(dish => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${dish.name}</strong>: ${dish.description}`;
        dishList.appendChild(listItem);
    });
});