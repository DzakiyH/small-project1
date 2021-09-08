function pageNavigation() {
    const product1 = document.querySelector('.product1');
    const product2 = document.querySelector('.product2');
    const productNavigations = document.querySelectorAll(".product-navigation");

    productNavigations.forEach(productNavigation => {
        productNavigation.addEventListener('click', () => {
            if (productNavigation.classList.contains("active")) {
                return
            } else {
                product1.classList.toggle("active");
                product2.classList.toggle("active");
                productNavigations.forEach(el => {
                    if (el.classList.contains("active")) {
                        el.classList.remove("active")
                    }
                })
                productNavigation.classList.toggle("active");
            }
        })
    })

}

pageNavigation();