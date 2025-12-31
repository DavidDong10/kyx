// Stripe links for each product+size
const stripeLinks = {
    "Nike Air Jordan 1 Retro": {
        "7":"https://buy.stripe.com/link1-7","8":"https://buy.stripe.com/link1-8","9":"https://buy.stripe.com/link1-9","10":"https://buy.stripe.com/link1-10","11":"https://buy.stripe.com/link1-11","12":"https://buy.stripe.com/link1-12"
    },
    "Adidas Yeezy Boost 350": {
        "7":"https://buy.stripe.com/link2-7","8":"https://buy.stripe.com/link2-8","9":"https://buy.stripe.com/link2-9","10":"https://buy.stripe.com/link2-10","11":"https://buy.stripe.com/link2-11","12":"https://buy.stripe.com/link2-12"
    }
    // Add more products/links here
};

let cart = [];

function addToCart(product, price, size){
    cart.push({product, price, size});
    updateCart();
}

function updateCart(){
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item,index)=>{
        const li=document.createElement('li');
        li.textContent=`${item.product} (Size: ${item.size}) - $${item.price}`;
        li.style.cursor="pointer";
        li.title="Click to remove";
        li.onclick=()=>{cart.splice(index,1);updateCart();};
        cartItems.appendChild(li);
        total+=item.price;
    });
    cartTotal.textContent=total;
}

function checkout(){
    if(cart.length===0){alert("Your cart is empty!");return;}
    cart.forEach(item=>{
        const product=item.product;
        const size=item.size;
        const link=stripeLinks[product][size];
        if(link){window.open(link,"_blank");} 
        else{alert(`Stripe link not found for ${product} size ${size}`);}
    });
    cart=[];
    updateCart();
}
