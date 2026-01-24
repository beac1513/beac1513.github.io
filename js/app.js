function loadLayout(pageName) {
    fetch('/shared/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            
            const hamburger = document.querySelector('.hamburger');
            const nav = document.getElementById('main-nav');
            
            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    nav.classList.toggle('open');
                    this.classList.toggle('active');
                });
            }
            
            let currentPath = window.location.pathname;
            currentPath = currentPath.replace(/index\.html$/, ''); 
            currentPath = currentPath.replace(/\/$/, '') || '/'; 
            
            document.querySelectorAll('nav a').forEach(link => {
                let href = link.getAttribute('href');
                let normalizedHref = href.replace(/index\.html$/, '');
                normalizedHref = normalizedHref.replace(/\/$/, '') || '/';
                
                if (currentPath === normalizedHref || 
                    (currentPath !== '/' && currentPath.startsWith(normalizedHref) && normalizedHref !== '/')) {
                    link.classList.add('active');
                }
            });
        });

    fetch('/shared/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            
            initChangelogAccordions();
        });
}

function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('show');
        });
    });
}

function initChangelogAccordions() {
    const changelogAccordions = document.querySelectorAll('.changelog-accordion');
    
    changelogAccordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('show');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initAccordions();
});