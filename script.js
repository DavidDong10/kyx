// Stripe links for each product+size
const stripeLinks = {
    "KYX Shadow": {
        "7": "https://buy.stripe.com/link-shadow-7",
        "8": "https://buy.stripe.com/link-shadow-8",
        "9": "https://buy.stripe.com/link-shadow-9",
        "10": "https://buy.stripe.com/link-shadow-10",
        "11": "https://buy.stripe.com/link-shadow-11",
        "12": "https://buy.stripe.com/link-shadow-12"
    },
    "KYX Eclipse": {
        "7": "https://buy.stripe.com/link-eclipse-7",
        "8": "https://buy.stripe.com/link-eclipse-8",
        "9": "https://buy.stripe.com/link-eclipse-9",
        "10": "https://buy.stripe.com/link-eclipse-10",
        "11": "https://buy.stripe.com/link-eclipse-11",
        "12": "https://buy.stripe.com/link-eclipse-12"
    },
    "KYX Phantom": {
        "7": "https://buy.stripe.com/link-phantom-7",
        "8": "https://buy.stripe.com/link-phantom-8",
        "9": "https://buy.stripe.com/link-phantom-9",
        "10": "https://buy.stripe.com/link-phantom-10",
        "11": "https://buy.stripe.com/link-phantom-11",
        "12": "https://buy.stripe.com/link-phantom-12"
    }
};

let cart = [];

function addToCart(product, price, size) {
    cart.push({ product, price, size });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

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
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Open Stripe links for all items in the cart
    cart.forEach(item => {
        const product = item.product;
        const size = item.size;
        const link = stripeLinks[product][size];
        if (link) {
            window.open(link, "_blank");
        } else {
            alert(`Stripe link not found for ${product} size ${size}`);
        }
    });

    // Clear cart after checkout
    cart = [];
    updateCart();
}
