let quantity = 0;
const ticktElement = document.querySelector('.tickt');
const amountPerTicket = parseInt(ticktElement.getAttribute('data-amount-per-ticket')) || 0;

function updateDisplay() {
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('amount').innerHTML = quantity * amountPerTicket;
}

function increment() {
    quantity += 1;
    updateDisplay();
}

function decrement() {
    if (quantity > 0) {
        quantity -= 1;
        updateDisplay();
    }
}

// Initial display update
updateDisplay();
