document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll('.skills');
    const skillSection = document.getElementById('skill_section');
    let hasAnimated = false;

    window.addEventListener('scroll', function() {
        const sectionRect = skillSection.getBoundingClientRect();

        if (sectionRect.top < window.innerHeight && !hasAnimated) {
            setTimeout(() => {
                skills.forEach(skill => {
                    skill.style.visibility = 'visible';

                    skill.classList.remove('animate');
                    void skill.offsetWidth; // Trigger reflow
                    skill.classList.add('animate');

                    if (skill.classList.contains('html')) {
                        skill.style.width = '50%';
                    } else if (skill.classList.contains('css')) {
                        skill.style.width = '80%';
                    } else if (skill.classList.contains('js')) {
                        skill.style.width = '65%';
                    } else if (skill.classList.contains('php')) {
                        skill.style.width = '60%';
                    }
                });
                hasAnimated = true;
            }, 500);
        }
    });
});