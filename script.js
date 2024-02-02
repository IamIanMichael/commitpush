function openCart() {
    // Display the cart
    document.getElementById('cart').style.display = 'block';
}

function closeCart() {
    // Hide the cart
    document.getElementById('cart').style.display = 'none';
}

function addItem(itemName, itemPrice) {
    // Get the cart content element
    var cartContent = document.getElementById('cartContent');

    // Create a new item element
    var newItem = document.createElement('div');
    newItem.className = 'cart-item';

    // Create HTML content for the new item
    newItem.innerHTML = `
        <span class="item-name">${itemName}</span>
        <span class="item-price">$${itemPrice}</span>
        <button class="remove-button" onclick="removeItem(this)">Remove</button>
    `;

    // Append the new item to the cart content
    cartContent.appendChild(newItem);

    // Open the cart after adding an item
    openCart();
}

function removeItem(button) {
    // Get the parent item div and remove it
    var item = button.parentNode;
    item.parentNode.removeChild(item);
}
