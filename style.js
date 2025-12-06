
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const THEME_KEY = 'portfolio-theme';

function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        updateButtonText();
    } else if (savedTheme === 'light') {
        body.classList.remove('dark');
        updateButtonText();
    } else {

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark');
        }
        updateButtonText();
    }
}

function updateButtonText() {
    const isDark = body.classList.contains('dark');
    toggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    updateButtonText();
});

initializeTheme();
