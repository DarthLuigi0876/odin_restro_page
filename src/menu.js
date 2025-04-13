export function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuHead = document.createElement('h1');
    menuHead.textContent = 'Menu';
    menuHead.classList.add('menu-head');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuItems = [
        { name: 'Pizza', description: 'Delicious cheese and tomato pizza', price: 10.99 },
        { name: 'Burger', description: 'Juicy beef burger with lettuce and tomato', price: 8.99 },
        { name: 'Pasta', description: 'Creamy Alfredo pasta with chicken', price: 12.99 },
        { name: 'Salad', description: 'Fresh garden salad with vinaigrette', price: 7.99 },
        { name: 'Soda', description: 'Refreshing soda drink', price: 2.50 },
        { name: 'Water', description: 'Bottled water', price: 1.50 },
        { name: 'Dessert', description: 'Chocolate cake with ice cream', price: 5.99 }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
    });

    return [menuHead, menuContainer];
}