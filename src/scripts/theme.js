// The initial theme is applied by an inline script in BaseLayout's <head> to prevent a flash.
// This adds the toggle button and keeps the theme in sync afterwards.
(function () {
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    const moonIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    const sunIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';

    function savedTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            return null;
        }
    }

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'theme-toggle';

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        const isDark = theme === 'dark';
        const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        toggle.innerHTML = isDark ? sunIcon : moonIcon;
        toggle.setAttribute('aria-label', label);
        toggle.title = label;
    }

    function currentTheme() {
        return savedTheme() || (systemDark.matches ? 'dark' : 'light');
    }

    toggle.addEventListener('click', function () {
        const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        try {
            localStorage.setItem('theme', newTheme);
        } catch (e) {}
    });

    // Follow the system setting until the visitor picks a theme themselves
    systemDark.addEventListener('change', function () {
        applyTheme(currentTheme());
    });

    // Pages restored with the back button may have a stale theme
    window.addEventListener('pageshow', function () {
        applyTheme(currentTheme());
    });

    applyTheme(currentTheme());
    document.body.appendChild(toggle);
})();
