const cartBtn = document.getElementById("cart-button");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
cartBtn.addEventListener("click", () => {
    cart.classList.toggle("translate-x-full");
});
closeCart.addEventListener("click", () => {
    cart.classList.add("translate-x-full");
});
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.previousElementSibling.textContent;
        const li = document.createElement("li");
        li.textContent = itemName;
        cartItems.appendChild(li);
    });
});