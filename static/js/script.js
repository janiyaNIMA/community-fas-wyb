/* Vintage Web Script */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Wayaba University of Sri Lanka');
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
        });
        button.addEventListener('mouseout', function() {
            this.style.textShadow = 'none';
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add active state to current nav link
    updateActiveNavLink();
    window.addEventListener('hashchange', updateActiveNavLink);
});

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if ((currentPage === '/' && href === '/') || 
            (currentPage.includes('about') && href.includes('about'))) {
            link.style.color = '#c0a080';
            link.style.borderBottom = '2px solid #c0a080';
        }
    });
}

// Show alert messages with fade-in effect
const alerts = document.querySelectorAll('.alert');
alerts.forEach(alert => {
    alert.style.opacity = '0';
    alert.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        alert.style.opacity = '1';
    }, 100);
    
    // Auto-dismiss alerts after 5 seconds
    setTimeout(() => {
        alert.style.transition = 'opacity 0.5s ease-out';
        alert.style.opacity = '0';
        setTimeout(() => {
            alert.remove();
        }, 500);
    }, 5000);
});

// Simple page transition effect
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 10);
});
