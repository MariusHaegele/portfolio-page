const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};


const animateOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.about-card, .skill-card, .project-card');
elementsToAnimate.forEach(el => animateOnScroll.observe(el));


const animateSkillBars = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            const skillLevel = entry.target.dataset.skill;
            skillProgress.style.setProperty('--progress', `${skillLevel}%`);
            skillProgress.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(el => animateSkillBars.observe(el));

let lastScrollPosition = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScrollPosition && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScrollPosition && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }

    lastScrollPosition = currentScroll;
});
