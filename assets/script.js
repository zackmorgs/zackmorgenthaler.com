const handleNavState = () => {
    let isOpen = false;
    const navToggle = document.getElementById('nav_toggle');
    navToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        navToggle.innerHTML = isOpen == true ? 'Close' : 'Menu';
        const nav = document.getElementById('nav_main');
        nav.classList.toggle('open');
    });
};

const handleActiveNavLink = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#nav_main .nav-link');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    handleNavState();
    handleActiveNavLink();
});