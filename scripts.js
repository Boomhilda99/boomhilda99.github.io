document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');
    const fullScreenMenu = document.querySelector('.full-screen-menu');

    if (hamburger && fullScreenMenu) {
        hamburger.addEventListener('click', function() {
            fullScreenMenu.classList.add('active');
        });
    } else {
        console.error('Hamburger menu or full-screen menu elements are not found in the DOM.');
    }

    if (closeBtn && fullScreenMenu) {
        closeBtn.addEventListener('click', function() {
            fullScreenMenu.classList.remove('active');
        });
    } else {
        console.error('Close button or full-screen menu elements are not found in the DOM.');
    }

    if (window.location.hash === '#latest') {
        // Remove the hash from the URL and refresh the page
        window.location.href = window.location.origin + window.location.pathname;
        window.location.reload(true); // Force a hard refresh to bypass the cache
    }
});
