// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-active');
    });
});


//collapsing the sub-menu on mobile devices:
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-menu > li');

    navItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                // Close other sub-menus if necessary
                navItems.forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });
                // Toggle the clicked item
                item.classList.toggle('active');
            }
        });
    });
});
