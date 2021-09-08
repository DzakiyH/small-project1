function addToCart() {
    const cartBtn = document.querySelector(".cart-btn");

    cartBtn.addEventListener('click', () => {
        if (cartBtn.classList.contains("clicked")) {
            alert("item already added to your cart!")
        } else {
            cartBtn.classList.add("clicked");
            alert("item added to your cart")
        }
    })
}

addToCart();