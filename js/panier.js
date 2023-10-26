// Exemple de produits
/*
const products = [
    { id: 1, name: 'Baguette', price: 10.99 },
    { id: 2, name: 'Anneau', price: 19.99 },
    { id: 3, name: 'Cape', price: 5.99 }
];
*/

const cart = [];

function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        total += product.price * item.quantity;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${product.name} x${item.quantity}</span>
            <span>$${(product.price * item.quantity).toFixed(2)}</span>
            <button data-id="${item.id}">Supprimer</button>
        `;

        cartElement.appendChild(itemElement);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    renderCart();
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            cart.splice(itemIndex, 1);
        }
    }

    renderCart();
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Merci pour votre achat!');
    cart.length = 0; // Réinitialise le panier
    renderCart();
});

document.getElementById('cart').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const productId = parseInt(e.target.getAttribute('data-id'));
        removeFromCart(productId);
    }
});

// Initialisation de la page
renderCart();

// Afficher les produits disponibles
const productContainer = document.createElement('div');
productContainer.className = 'product-container';

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button data-id="${product.id}">Ajouter au panier</button>
    `;

    productElement.querySelector('button').addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    });

    productContainer.appendChild(productElement);
});

document.body.appendChild(productContainer);
