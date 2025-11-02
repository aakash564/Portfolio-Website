// Function to handle the mobile navigation toggle
function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = navMenu.querySelectorAll('a');
    const header = document.querySelector('.header');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        header.classList.toggle('nav-open'); // Optional class for styling header when menu is open
    });

    // Close menu when a link is clicked (useful for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                header.classList.remove('nav-open');
            }
        });
    });
}

// Ensure smooth scrolling functionality for internal links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if CSS handles smooth scrolling; if not, use JS fallback
            if (window.getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate target position considering fixed header height
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupSmoothScrolling();
});
