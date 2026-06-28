// ===============================
// Dee Chetan Shopping Cart
// ===============================

// Cart Elements
const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

// Open Cart
cartIcon.addEventListener("click", function(e){
    e.preventDefault();
    cartSidebar.classList.add("active");
});

// Close Cart
closeCart.addEventListener("click", function(){
    cartSidebar.classList.remove("active");
});
