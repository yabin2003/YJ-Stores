document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('click', function () {
        document.body.classList.toggle('darkmode');
    });

    // Cart functionality
    let cart = [];

    // Add to Cart button functionality
    document.querySelectorAll('#ac-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productContainer = button.closest('#img-cnt');
            const productName = productContainer.querySelector('#para').textContent;
            const productPrice = parseFloat(productContainer.querySelector('#price').textContent.replace('Price: Rs.', '','.00'));
            addToCart(productName, productPrice);
        });
    });

    // Buy Now button functionality
    document.querySelectorAll('#btn').forEach(button => {
        button.addEventListener('click', () => {
            const productContainer = button.closest('#img-cnt');
            const productName = productContainer.querySelector('#para').textContent;
            const productPrice = parseFloat(productContainer.querySelector('#price').textContent.replace('Price: Rs.', '','.00'));
            addToCart(productName, productPrice);
            alert(`You have purchased ${productName} for Rs.${productPrice.toFixed(2)}. Thank you!`);
        });
    });

    // Add product to cart
    function addToCart(productName, price) {
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name: productName, price: price, quantity: 1 });
        }
        updateCart();
    }

    // Update cart display
    function updateCart() {
        const cartBody = document.getElementById('cart-body');
        const cartTotal = document.getElementById('cart-total');
        let total = 0;

        cartBody.innerHTML = '';
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>Rs.${item.price.toFixed(2)}</td>
                <td>Rs.${(item.price * item.quantity).toFixed(2)}</td>
                <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
            `;
            cartBody.appendChild(row);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Total: Rs.${total.toFixed(2)}`;
    }

    // Remove product from cart
    window.removeFromCart = function (productName) {
        cart = cart.filter(item => item.name !== productName);
        updateCart();
    };

    // Checkout functionality
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            cart = [];
            updateCart();
        }
    });

    // Cart popup functionality
    const cartIcon = document.getElementById('cart_icon');
    const cartPopup = document.getElementById('cart-cnt');
    const closeBtn = document.getElementById('close-btn');

    cartIcon.addEventListener('click', () => {
        cartPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        cartPopup.style.display = 'none';
    });
 
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});