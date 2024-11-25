let cart = [];

const product = {
    name: 'Shadow of Mordor',
    price: 25
};

// Actualizar el carrito en la interfaz
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    
    cartItems.innerHTML = '';

    // Añadir cada producto al carrito con el botón de eliminar
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - U$D ${item.price} `;
        
        // Botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => {
            removeItemFromCart(index); 
        });

        li.appendChild(deleteButton);
        cartItems.appendChild(li);
    });

    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = `Precio total: U$D ${total}`;
}

// Función para agregar el producto al carrito
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    cart.push(product);
    updateCart();
});

function removeItemFromCart(index) {
    cart.splice(index, 1); 
    updateCart(); 
}