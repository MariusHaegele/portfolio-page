// Beispiel: Dynamischer Textinhalt
document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector('.hero p');
    heroText.textContent = "Erstelle beeindruckende Webprojekte mit Leichtigkeit.";
});

// Beispiel: Event-Listener für Benutzeraktionen
const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        alert("Sie haben auf einen Menüpunkt geklickt.");
    });
});