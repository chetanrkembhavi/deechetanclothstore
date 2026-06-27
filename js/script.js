/* ==========================================
   Dee Chetan Cloth Store
   script.js
========================================== */

// ================= Loader =================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// ================= Mobile Menu =================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}

// ================= Image Slider =================

const slides = document.getElementsByClassName("slides");

if (slides.length > 0) {

    let slideIndex = 0;

    showSlides();

    function showSlides() {

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 3000);
    }
}
// ================= Search =================

function searchProducts() {

    let input = document
        .getElementById("searchInput")
        .value
        .toUpperCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toUpperCase();

        if(title.indexOf(input) > -1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

// ================= Category Filter =================

function filterProducts(category){

    let cards=document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        if(category=="all"){

            card.style.display="block";

        }

        else if(card.classList.contains(category)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

// ================= Wishlist =================

// ================= Wishlist =================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(element, name = "Product") {

    const icon = element.querySelector("i");

    const index = wishlist.indexOf(name);

    if (index === -1) {

        wishlist.push(name);

        icon.classList.remove("far");
        icon.classList.add("fas");
        icon.style.color = "red";

    } else {

        wishlist.splice(index, 1);

        icon.classList.remove("fas");
        icon.classList.add("far");
        icon.style.color = "";

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();
}

function updateWishlistCount() {

    const count = document.getElementById("wishlist-count");

    if (count) {

        count.innerHTML = wishlist.length;

    }

}

updateWishlistCount();

// ================= Shopping Cart =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add Product
function addToCart(name = "Premium Floral Shirt", price = 999, image = "images/floral-shirt.jpg.webp") {

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            name,
            price,
            image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");
}

// Cart Count
function updateCartCount() {

    let count = 0;

    cart.forEach(item => {
        count += item.qty;
    });

    let cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerHTML = count;
    }

}

// Load Cart Page
function loadCart() {

    let cartItems = document.getElementById("cart-items");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" width="120">

            <div class="cart-details">

                <h3>${item.name}</h3>

                <p>₹ ${item.price}</p>

            </div>

            <div class="quantity">

                <button onclick="changeQty(${index},-1)">−</button>

                <span>${item.qty}</span>

                <button onclick="changeQty(${index},1)">+</button>

            </div>

            <h3>₹ ${item.price * item.qty}</h3>

            <button class="remove-btn" onclick="removeItem(${index})">
            Remove
            </button>

        </div>

        `;

    });

    document.getElementById("cart-total").innerHTML = total;

}

// Quantity
function changeQty(index, value) {

    cart[index].qty += value;

    if (cart[index].qty <= 0) {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

    updateCartCount();

}

// Remove Product
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

    updateCartCount();

}

window.onload = function () {

    updateCartCount();

    loadCart();

};
// ================= Dark Mode =================

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}

// ================= Scroll Button =================

let topButton=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

};

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ================= Newsletter =================

const subscribeButton=document.querySelector(".newsletter button");

if(subscribeButton){

subscribeButton.addEventListener("click",function(){

const email=document.querySelector(".newsletter input").value;

if(email===""){

alert("Please Enter Your Email");

}

else{

alert("Thank You For Subscribing!");

document.querySelector(".newsletter input").value="";

}

});

}

// ================= Feedback =================

const feedbackForm=document.querySelector(".feedback form");

if(feedbackForm){

feedbackForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You For Your Feedback!");

feedbackForm.reset();

});

}
const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {

checkoutForm.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Thank you! Your order has been placed successfully.");

localStorage.removeItem("cart");

window.location.href = "index.html";

});

}
