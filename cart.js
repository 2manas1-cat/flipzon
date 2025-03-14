document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".add-to-cart"); // Use class selector for better accuracy

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let productDiv = this.closest(".product"); // Get the parent product div
            let productName = productDiv.querySelector("h3").textContent.trim();
            let productPrice = parseInt(productDiv.querySelector("p").textContent.replace("$", "").trim(), 10);
            let quantity = parseInt(productDiv.querySelector(".quantity").value, 10);

            if (quantity > 0) {
                let cart = JSON.parse(localStorage.getItem("cart")) || {}; // Retrieve or initialize cart

                if (cart[productName]) {
                    cart[productName].quantity += quantity;
                } else {
                    cart[productName] = { price: productPrice, quantity: quantity };
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                alert(productName + " added to cart!");
            } else {
                alert("Please select a valid quantity.");
            }
        });
    });
});
