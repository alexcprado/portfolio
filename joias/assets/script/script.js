const cartBtn = document.getElementById("cart-button");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const itemCost = document.getElementById("itemCost");
const itemAdded = document.getElementById("itemAdded");
let total = 0;
const totalCart = document.getElementById("totalCart");
const btnCheckout = document.getElementById("btnCheckout");

// Checkout variables
const subtotalCheckout = document.getElementById("subtotalCheckout");
const shippingCheckout = document.getElementById("shippingCheckout");
const totalCheckout = document.getElementById("totalCheckout");

cartBtn.addEventListener("click", () => {
    cart.classList.toggle("translate-x-full");
});
closeCart.addEventListener("click", () => {
    cart.classList.add("translate-x-full");
});
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.previousElementSibling.textContent;
        const cost = parseFloat(button.getAttribute("data-price"));

        const li = document.createElement("li");
        li.textContent = `${itemName} - R$${cost.toFixed(3)}`;
        cartItems.appendChild(li);

        pricing = total += cost;
        totalCart.textContent = `R$${pricing.toFixed(3)}`;

        btnCheckout.disabled = total <= 0;
        
        showItemAdded();
    });
});

btnCheckout.addEventListener("click", () => {
    if (total > 0) {
       window.location.href = './checkout/checkout.html'
    }else {
        alert("Seu carrinho está vazio!")
    }
})

function showItemAdded() {
    alert("Item adicionado com sucesso!");
};
