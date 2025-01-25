
const cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    showPopup(`${name} has been added to the cart.`);
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => popup.style.display = 'none', 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button =>
        button.addEventListener('click', () => addToCart(button.dataset.name, button.dataset.price))
    );

    document.querySelector('.cart-icon').addEventListener('click', () => {
        if (!cart.length) {
            alert('Add your dishes here.');
        } else {
            let cartContent = 'Added dishes:\n';
            let totalAmount = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                cartContent += `${item.name} x${item.quantity} - ₹${itemTotal}\n`;
                totalAmount += itemTotal;
            });
            cartContent += `\nTotal: ₹${totalAmount}`;
            alert(cartContent);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons and add it to the clicked button
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            // Get the selected category
            const category = button.getAttribute("data-category");

            // Show or hide menu items based on the selected category
            menuItems.forEach((item) => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block"; // Show the item
                } else {
                    item.style.display = "none"; // Hide the item
                }
            });
        });
    });
});