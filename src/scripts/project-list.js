// Fade in project items as they scroll into view
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 60}ms`;
    fadeObserver.observe(item);
});

// Load videos only when they scroll near the viewport
window.addEventListener('load', () => {
    const videos = document.querySelectorAll('.project-video[data-src]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting && !video.querySelector('source')) {
                const source = document.createElement('source');
                source.src = video.dataset.src;
                source.type = 'video/mp4';
                video.appendChild(source);
                video.load();

                video.addEventListener('loadeddata', () => {
                    video.play().catch(err => {
                        console.log('Autoplay prevented:', err);
                    });
                }, { once: true });

                observer.unobserve(video);
            }
        });
    }, { rootMargin: '200px' });

    videos.forEach(video => observer.observe(video));
});

restoreScrollPosition();

function restoreScrollPosition() {
    // Each list page remembers its own scroll position
    const storageKey = `scrollPosition:${window.location.pathname}`;
    const savedPosition = sessionStorage.getItem(storageKey);

    if (savedPosition !== null) {
        // Restore the scroll position
        window.scrollTo(0, parseInt(savedPosition));
    }

    // Save scroll position whenever user scrolls
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Debounce to avoid saving too frequently
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            sessionStorage.setItem(storageKey, window.scrollY);
        }, 100);
    });
}
