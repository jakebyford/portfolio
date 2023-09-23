// script.js
document.addEventListener("DOMContentLoaded", function () {
    const quotes = document.querySelectorAll(".quote");
    let currentIndex = 0;

    function showQuote(index) {
        quotes.forEach((quote, i) => {
            if (i === index) {
                quote.classList.add("active");
            } else {
                quote.classList.remove("active");
            }
        });
    }

    function nextQuote() {
        currentIndex = (currentIndex + 1) % quotes.length;
        showQuote(currentIndex);
    }

    // Display the first quote
    showQuote(currentIndex);

    // Automatically advance to the next quote every 3 seconds (adjust as needed)
    setInterval(nextQuote, 10000);
});
