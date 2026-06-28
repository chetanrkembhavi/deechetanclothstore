// Shopping Cart

let cart = [];

const cartCount = document.querySelector(".cart-count");

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart.push(1);

        cartCount.textContent = cart.length;

        alert("Product added to cart!");

    });

});
