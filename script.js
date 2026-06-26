// ===============================
// Live Product Search
// ===============================

function searchProducts() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product){

        let name = product.querySelector("h3")
        .innerText
        .toLowerCase();

        if(name.includes(input))
            product.style.display="block";
        else
            product.style.display="none";

    });

}
// ===============================
// Wishlist
// ===============================

function toggleWishlist(icon){

    icon.classList.toggle("active");

}
// ======================
// Shopping Cart
// ======================

let cart = 0;

function addToCart(){

    cart++;

    document.getElementById("cart-count").innerHTML = cart;

    alert("Product added to cart!");

}

function showCart(){

    alert("You have " + cart + " item(s) in your cart.");

}
// ======================
// Dark Mode
// ======================

function toggleDarkMode(){

document.body.classList.toggle("dark");

}
