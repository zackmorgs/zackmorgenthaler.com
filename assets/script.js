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

document.addEventListener('DOMContentLoaded', () => {
    handleNavState();
});