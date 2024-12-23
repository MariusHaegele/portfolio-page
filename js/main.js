// Project Data
const projects = [
    {
        title: 'Microservice-Architektur',
        description: 'Datenaufteilung in einer Microservice-Architektur',
        image: 'assets/Microservice-Architektur.jpg',
        tech: ['Python', 'Docker', 'FaaS'],
        github: 'https://github.com/MariusHaegele/SDA2-Assignment-1'
    },
    {
        title: 'Textverarbeitungs-Tool',
        description: 'Textverarbeitungs-Tool basierend auf einer Mikrokernel-Architektur',
        image: 'assets/Textverarbeitungs-Tool.jpg',
        tech: ['Python', 'Docker'],
        github: 'https://github.com/MariusHaegele/SDA2-Assignment-2'
    },
    {
        title: 'Authentifizierungsmethoden',
        description: 'Beispiel von Authentifizierungsmethoden wie JWT und Basis-Authentifizierung',
        image: 'assets/Authentifizierungsmethoden.jpg',
        tech: ['Python', 'Docker'],
        github: 'https://github.com/MariusHaegele/SDA4-Assignment-2'
    }
];

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Load Projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i class="icon-github"></i> Zum Repository
                    </a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Contact Form Handling
emailjs.init('Vd30MxCkwevcHL8SC');
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const serviceID = 'service_tpbrep8';
    const templateID = 'template_70xkiup';

    emailjs.sendForm(serviceID, templateID, contactForm)
        .then(() => {
            alert('Nachricht erfolgreich gesendet!');
            contactForm.reset();
        })
        .catch((err) => {
            console.error('Fehler:', err);
            alert(`Nachricht konnte nicht gesendet werden. Fehler: ${JSON.stringify(err)}`);
        });
});

// Initialize Map
document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map').setView([46.942296, 7.441118], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([46.942296, 7.441118]).addTo(map)
        .bindPopup('Mein Standort in Bern.')
        .openPopup();
});

// Timeline Data
const timelineData = [
    { year: '2022 - Heute', title: 'Berner Fachhochschule', description: 'Bachelor of Science in Wirtschaftsinformatik mit Vertiefung im Projektmanagement' },
    { year: '2023 - Heute', title: 'UX/UI Designer', description: 'Entwicklung benutzerfreundlicher Designs für die App und Software der Schneider Software AG' },
    { year: '2021 - 2023', title: 'Kaufmännischer Angestellter', description: 'Verantwortlich für administrative Aufgaben und Kundenbetreuung bei der Schneider Software AG' },
    { year: '2017 - 2021', title: 'Wirtschaftsmittelschule Thun', description: 'Ausbildung zum Kaufmann EFZ mit Berufsmaturität (BM)' }
];

function createTimelineItem(data) {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    const content = document.createElement('div');
    content.className = 'timeline-content';

    const year = document.createElement('div');
    year.className = 'timeline-year';
    year.textContent = data.year;

    const title = document.createElement('div');
    title.className = 'timeline-title';
    title.textContent = data.title;

    const description = document.createElement('div');
    description.className = 'timeline-description';
    description.textContent = data.description;

    const dot = document.createElement('div');
    dot.className = 'timeline-dot';

    content.appendChild(year);
    content.appendChild(title);
    content.appendChild(description);
    item.appendChild(content);
    item.appendChild(dot);

    return item;
}

function initTimeline() {
    const timeline = document.querySelector('.timeline');
    timelineData.forEach(data => {
        timeline.appendChild(createTimelineItem(data));
    });
}

document.addEventListener("DOMContentLoaded", initTimeline);
