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


document.addEventListener("DOMContentLoaded", function() {
    // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // Add event listener to the button
    mybutton.addEventListener('click', topFunction);
});