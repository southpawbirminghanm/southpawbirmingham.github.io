document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const themeLink = document.getElementById('theme-link');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeLink.href = savedTheme;
    }

    window.setTheme = (themeName) => {
        themeLink.href = themeName;
        localStorage.setItem('theme', themeName);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
    });
});
