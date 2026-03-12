// Load projects into the list
document.addEventListener('DOMContentLoaded', function () {
    const projectsList = document.getElementById('projectsList');

    projects.forEach(project => {
        const projectItem = document.createElement('a');
        projectItem.className = 'project-item';
        projectItem.href = `project.html?id=${project.id}#content`;

        // Don't load video sources initially - just set up the video element with poster
        const mediaHtml = project.video
            ? `<video class="project-video" 
                      autoplay 
                      loop 
                      muted 
                      playsinline 
                      poster="${project.posterImage || project.thumbnail || ''}" 
                      preload="none"
                      data-src="${project.video}">
               </video>`
            : '<div class="project-media"></div>';

        projectItem.innerHTML = `
            <div class="project-content">
                <div class="project-text">
                    <h3>${project.title}</h3>
                    <p class="date">${project.dateStart}${project.dateEnd ? ' - ' + project.dateEnd : ''}</p>
                    <p>${project.shortDescription}</p>
                    <div class="tech-tag">
                        ${project.technologies ? project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join(' ') : ''}
                    </div>
                </div>
                <div class="project-media">
                    ${mediaHtml}
                </div>
            </div>
        `;

        projectsList.appendChild(projectItem);
    });

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
});

function restoreScrollPosition() {
    // Check if we have a saved scroll position for this page
    const savedPosition = sessionStorage.getItem('indexScrollPosition');
    
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
            sessionStorage.setItem('indexScrollPosition', window.scrollY);
        }, 100);
    });
}