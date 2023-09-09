// JavaScript for the navigation toggle button
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
});

// Close the navigation menu if a link is clicked
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show-nav');
    });
});
