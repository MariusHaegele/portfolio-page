document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector('.hero p');
    heroText.textContent = "Erstelle beeindruckende Webprojekte mit Leichtigkeit.";
});

let lastScrollTop = 0;
const header = document.querySelector('header');

document.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header.style.top = "-80px";
    } else {
        header.style.top = "0";
    }

    lastScrollTop = currentScroll;
});

const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Navigiere zu: ${link.getAttribute('href')}`);
    });
});