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

    // Load videos AFTER the page has fully loaded (progress bar complete)
    window.addEventListener('load', () => {
        const videos = document.querySelectorAll('.project-video[data-src]');
        
        videos.forEach((video, index) => {
            // Stagger video loading by 100ms each
            setTimeout(() => {
                const source = document.createElement('source');
                source.src = video.dataset.src;
                source.type = 'video/mp4';
                video.appendChild(source);
                video.load();
                
                // Start playing as soon as first frame is available
                video.addEventListener('loadeddata', () => {
                    video.play().catch(err => {
                        console.log('Autoplay prevented:', err);
                    });
                }, { once: true });
            }, index * 100);
        });
    });
});