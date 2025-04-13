export function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';


    const menuHead = document.createElement('h1');
    menuHead.textContent = 'Our Premium Menu';
    menuHead.classList.add('menu-head');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuItems = [
        { name: 'Signature Burger', description: 'House-ground prime beef with aged cheddar, caramelized onions, and special sauce', price: 16.99 },
        { name: 'Truffle Fries', description: 'Hand-cut potatoes, truffle oil, parmesan, and fresh herbs', price: 9.99 },
        { name: 'BBQ Ribs', description: 'Slow-cooked pork ribs with our secret spice rub and tangy barbecue glaze', price: 24.99 },
        { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with lemon-dill butter and seasonal vegetables', price: 22.99 },
        { name: 'Craft Mac & Cheese', description: 'Four-cheese blend with toasted breadcrumbs and black truffle', price: 14.99 },
        { name: 'Garden Salad', description: 'Locally sourced greens, heirloom tomatoes, and house-made vinaigrette', price: 10.99 },
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center and vanilla bean ice cream', price: 8.99 },
        { name: 'Craft Beer', description: 'Rotating selection of local draft beers', price: 6.50 }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        itemName.classList.add('item-name');

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemDescription.classList.add('item-description');

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        itemPrice.classList.add('item-price');

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
    });

    content.appendChild(menuHead);
    content.appendChild(menuContainer);

    return [menuHead, menuContainer];
}