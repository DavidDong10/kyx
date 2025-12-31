const stripeLinks = {
    "Nike Air Jordan 1 Retro": {"7":"https://stripe.com/pay","8":"https://stripe.com/pay","9":"https://stripe.com/pay","10":"https://stripe.com/pay","11":"https://stripe.com/pay","12":"https://stripe.com/pay"},
    "Adidas Yeezy Boost 350": {"7":"https://stripe.com/pay","8":"https://stripe.com/pay","9":"https://stripe.com/pay","10":"https://stripe.com/pay","11":"https://stripe.com/pay","12":"https://stripe.com/pay"},
    "New Balance 574": {"7":"https://stripe.com/pay","8":"https://stripe.com/pay","9":"https://stripe.com/pay","10":"https://stripe.com/pay","11":"https://stripe.com/pay","12":"https://stripe.com/pay"},
    "Nike Air Max 270": {"7":"https://stripe.com/pay","8":"https://stripe.com/pay","9":"https://stripe.com/pay","10":"https://stripe.com/pay","11":"https://stripe.com/pay","12":"https://stripe.com/pay"},
    "Adidas Ultraboost 22": {"7":"https://stripe.com/pay","8":"https://stripe.com/pay","9":"https://stripe.com/pay","10":"https://stripe.com/pay","11":"https://stripe.com/pay","12":"https://stripe.com/pay"}
};

let cart = [];

function addToCart(product, price, size) {
    cart.push({ product, price, size });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} (Size: ${item.size}) - $${item.price}`;
        li.style.cursor = "pointer";
        li.title = "Click to remove";
        li.onclick = () => {
            cart.splice(index, 1);
            updateCart();
        };
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    cart.forEach(item => {
        const product = item.product;
        const size = item.size;
        const link = stripeLinks[product][size];
        if (link) window.open(link, "_blank");
    });

    cart = [];
    updateCart();
}

function toggleCart() {
    const cartSection = document.getElementById('cart-section');
    cartSection.style.display = cartSection.style.display === 'block' ? 'none' : 'block';
}
