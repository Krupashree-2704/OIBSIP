// Responsive Navigation
const navbar = document.getElementById('navbar');

document.addEventListener('DOMContentLoaded', () => {
    // Initial call to set the navbar state
    updateNavbar();

    // Call the function on every window resize
    window.addEventListener('resize', updateNavbar);
});

function updateNavbar() {
    if (window.innerWidth < 768) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}
