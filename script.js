let cart = [];

function addToCart(name, price, size) {
  cart.push({name, price, size});
  updateCart();
}

function updateCart() {
  const items = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  const count = document.getElementById('cart-count');

  items.innerHTML = '';
  let sum = 0;

  cart.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (Size ${item.size}) - $${item.price}`;
    li.style.cursor = 'pointer';
    li.onclick = () => { cart.splice(i,1); updateCart(); };
    items.appendChild(li);
    sum += item.price;
  });

  total.textContent = sum;
  count.textContent = cart.length;
}

function toggleCart() {
  const cartSection = document.getElementById('cart-section');
  cartSection.style.display = cartSection.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  if(cart.length===0){ alert("Cart is empty"); return; }
  alert("Checkout placeholder: open Stripe links here.");
  cart = [];
  updateCart();
}
