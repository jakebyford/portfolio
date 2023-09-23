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

// script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.querySelector(".navbar");
//     const scrollClass = "collapse";

//     function toggleNavbarCollapse() {
//         if (window.innerWidth <= 768) { // Add a media query for mobile screens
//             if (window.scrollY > 0) { // Check if the user has scrolled
//                 navbar.classList.add(scrollClass);
//             } else {
//                 navbar.classList.remove(scrollClass);
//             }
//         } else {
//             // On larger screens, keep the navbar expanded
//             navbar.classList.remove(scrollClass);
//         }
//     }

//     toggleNavbarCollapse();

//     window.addEventListener("scroll", toggleNavbarCollapse);
//     window.addEventListener("resize", toggleNavbarCollapse); // Handle screen size changes
// });

