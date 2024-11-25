let cart = [];

// Objeto para representar el producto
const product = {
    name: 'Uncharted 3',
    price: 29
};

// Función para actualizar el carrito en la interfaz
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    // Limpiar la lista de productos del carrito
    cartItems.innerHTML = '';

    // Añadir cada producto al carrito con el botón de eliminar
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - U$D ${item.price} `;
        
        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => {
            removeItemFromCart(index); // Eliminar producto del carrito
        });

        li.appendChild(deleteButton);
        cartItems.appendChild(li);
    });

    // Calcular el precio total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = `Precio total: U$D ${total}`;
}

// Función para agregar el producto al carrito
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    cart.push(product);
    updateCart();
});

// Función para eliminar un producto del carrito
function removeItemFromCart(index) {
    cart.splice(index, 1); // Elimina el producto en la posición "index"
    updateCart(); // Actualiza la visualización del carrito
}