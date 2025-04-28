// Check for saved theme preference, otherwise use dark theme (default)
const getStoredTheme = () => localStorage.getItem('theme') || 'dark';
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

// Function to set theme
const setTheme = (theme) => {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('#theme-toggle i').className = 'bx bx-sun';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.querySelector('#theme-toggle i').className = 'bx bx-moon';
    }
};

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = getStoredTheme();
    setTheme(currentTheme);

    // Add click event listener to theme toggle button
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const currentTheme = getStoredTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setStoredTheme(newTheme);
        setTheme(newTheme);
    });
});
