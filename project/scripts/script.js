// scripts/script.js

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img[data-src]");

    const loadImage = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
            image.removeAttribute("data-src");
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});

// Form Validation
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Local Storage Example
const saveDataButton = document.querySelector("#saveData");
const outputArea = document.querySelector("#output");

if (saveDataButton) {
    saveDataButton.addEventListener("click", () => {
        const data = document.querySelector("#dataInput").value;
        localStorage.setItem("userData", data);
        displayData();
    });
}

function displayData() {
    if (outputArea) {
        const savedData = localStorage.getItem("userData");
        outputArea.textContent = savedData ? savedData : "No data saved yet.";
    }
}

// Call displayData on load
window.onload = () => {
    displayData();
};
