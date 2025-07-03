const scrollToContent = () => {
    let content = document.querySelector('.content');

    // smooth scroll to content
    if (content) {
        content.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            content: 'nearest'
        });
    } else {
        console.error('Content element not found');
    }
};

const scrollToPost = () => {
    let postContent = document.querySelector('.post-content');

    // smooth scroll to post content
    if (postContent) {
        postContent.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    } else {
        console.error('Post content element not found');
    }
};

const handleNavClick = (event) => {
    let nav_main = document.getElementById('nav_main');

    nav_main.classList.toggle('open');
    event.preventDefault();
    event.stopPropagation();
};

const handleNavState = () => {
    const nav_main = document.getElementById('nav_main');

    if (nav_main) {
        let navLinks = nav_main.querySelectorAll('a');
        let pathname = window.location.pathname;
        navLinks.forEach((link) => {
            if (link.href.includes(pathname)) {
                console.log('Active link:', link.href);
                link.classList.add('active-page');
            }
        });

    } else {
        console.error('Navigation elements not found');
    }
};


const createRandomDust = () => {
    // Add some random dust particles

    const dust = document.querySelector('.dust');
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const size = Math.random() * 2 + 1;

    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.left = randomX + '%';
    particle.style.top = randomY + '%';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = 'rgba(255,255,255,0.6)';
    particle.style.borderRadius = '50%';
    particle.style.animation = 'dust 12s linear infinite';

    dust.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 12000);

    // Create random dust particles periodicallyAdd commentMore actions
    setInterval(createRandomDust, 5000);
};



document.addEventListener('DOMContentLoaded', () => {
    // createRandomDust();
    handleNavState();
});