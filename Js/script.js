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

let slideIndex = 0;
showSlides();

function showSlides() {

    let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (!topButton) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);

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

function toggleWishlist(element){

    let icon=element.querySelector("i");

    if(icon.classList.contains("far")){

        icon.classList.remove("far");

        icon.classList.add("fas");

        icon.style.color="red";

    }

    else{

        icon.classList.remove("fas");

        icon.classList.add("far");

        icon.style.color="";

    }

}

// ================= Cart =================

function addToCart(name="Premium Floral Shirt",price=999){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let existing=cart.find(item=>item.name===name);

if(existing){

existing.qty++;

}

else{

cart.push({

name:name,

price:price,

qty:1

});

}

localStorage.setItem("cart",JSON.stringify(cart));

document.getElementById("cart-count").innerHTML=cart.length;

alert(name+" Added To Cart");

}
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
