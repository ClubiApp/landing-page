// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Desktop dropdowns
const navTriggers = document.querySelectorAll('.nav-trigger');

navTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const dropdownId = trigger.getAttribute('data-dropdown');
        const dropdown = document.getElementById(`${dropdownId}-dropdown`);
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content.id !== `${dropdownId}-dropdown`) {
                content.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-item')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('active');
        });
    }
});