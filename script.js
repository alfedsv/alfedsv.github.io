document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню (бургер)
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('nav--open');
        });
        
        // Закрывать меню при клике на ссылку
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav--open');
            });
        });
    }
    
    // Закрывать меню при клике вне области (по желанию)
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('nav--open')) {
            if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
                nav.classList.remove('nav--open');
            }
        }
    });
    
    // Плавная прокрутка для всех якорных ссылок (уже есть в CSS scroll-behavior, но для старых браузеров)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});