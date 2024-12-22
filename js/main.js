// Project Data
const projects = [
    {
        title: 'Microservice-Architektur',
        description: 'Datenaufteilung in einer Microservice-Architektur',
        image: 'assets/Microservice-Architektur.jpg',
        tech: ['Python, ', 'Docker, ', 'FaaS'],
        github: 'https://github.com/MariusHaegele/SDA2-Assignment-1'
    },
    {
        title: 'Textverarbeitungs-Tool',
        description: 'Textverarbeitungs-Tool basierend auf einer Mikrokernel-Architektur',
        image: 'assets/Textverarbeitungs-Tool.jpg',
        tech: ['Python, ', 'Docker'],
        github: 'https://github.com/MariusHaegele/SDA2-Assignment-2'
    },
    {
        title: 'Authentifizierungsmethoden',
        description: 'Beispiel von Authentifizierungsmethoden wie JWT und Basis-Authentifizierung',
        image: 'assets/Authentifizierungsmethoden.jpg',
        tech: ['Python, ', 'Docker'],
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
            // Close mobile menu after clicking a link
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
                        <i class="icon-github"></i> GitHub
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hier würde normalerweise die Formularverarbeitung stattfinden
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Bestätigungsnachricht
    alert('Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.');
    contactForm.reset();
});