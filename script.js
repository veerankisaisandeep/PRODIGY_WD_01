document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const contentBoxes = document.querySelectorAll('.content-box');
    
    // Color schemes for the sections
    const colors = ['#eb7070', ' #64e291', '#e6e56c', '#A020F0']; // Yellow, Green, Tomato, Purple

    // Color schemes for the content boxes
    const boxColors = ['#eb7070', ' #64e291', '#e6e56c', '#A020F0']; // Same as navbar colors

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 60% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                navbar.style.backgroundColor = colors[index];
                contentBoxes.forEach(box => box.style.backgroundColor = boxColors[index]);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});
