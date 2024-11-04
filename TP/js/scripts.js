document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.grid');
    
    // Fetch productos desde la Fake Store API
    fetch('https://fakestoreapi.com/products?limit=10')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = `
                    <div class="producto">
                        <img src="${product.image}" alt="${product.title}" style="width:100px;">
                        <h3>${product.title}</h3>
                        <p>${product.description.substring(0, 50)}...</p>
                        <p><strong>$${product.price}</strong></p>
                        <button onclick="addToCart(${product.id})">Añadir al carrito</button>
                    </div>
                `;
                productGrid.innerHTML += productCard;
            });
        });
});

// Función para añadir al carrito
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto añadido al carrito');
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        localStorage.setItem('loggedIn', true);
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas');
    }
});
