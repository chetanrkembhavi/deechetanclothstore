// ===============================
// Dee Chetan Cloth Store
// Shopping Cart
// ===============================

let cart = [];

const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

// Open Cart
cartIcon.onclick = function(e){
    e.preventDefault();
    cartSidebar.classList.add("active");
};

// Close Cart
closeCart.onclick = function(){
    cartSidebar.classList.remove("active");
};

// Add Product
document.querySelectorAll(".add-cart").forEach(button=>{

    button.addEventListener("click",()=>{

        const item={
            name:button.dataset.name,
            price:Number(button.dataset.price),
            image:button.dataset.image
        };

        cart.push(item);

        updateCart();

    });

});

// Update Cart

function updateCart(){

    cartItems.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{

        total+=item.price;

        cartItems.innerHTML+=`

        <div class="cart-product">

            <img src="${item.image}">

            <div>

                <h4>${item.name}</h4>

                <p>₹${item.price}</p>

            </div>

            <button onclick="removeItem(${index})">❌</button>

        </div>

        `;

    });

    cartCount.innerHTML=cart.length;

    cartTotal.innerHTML="₹"+total;

}

// Remove Product

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}

// ==========================
// Live Product Search
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {

        const name = card.dataset.name.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// ===============================
// Wishlist
// ===============================

document.querySelectorAll(".wishlist-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        if (this.classList.contains("far")) {

            this.classList.remove("far");
            this.classList.add("fas");
            this.style.color = "red";

        } else {

            this.classList.remove("fas");
            this.classList.add("far");
            this.style.color = "";

        }

    });

});
