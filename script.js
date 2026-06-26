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
