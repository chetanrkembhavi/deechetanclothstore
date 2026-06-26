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
// =======================
// AUTO SLIDER
// =======================

let slideIndex = 0;

showSlides();

function showSlides(){

let slides=document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}
window.onscroll=function(){

scrollFunction();

};

function scrollFunction(){

let btn=document.getElementById("topBtn");

if(document.body.scrollTop>300 ||

document.documentElement.scrollTop>300)

btn.style.display="block";

else

btn.style.display="none";

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
document.querySelector(".menu-toggle").onclick=function(){

document.getElementById("menu")

.classList.toggle("show");

};
