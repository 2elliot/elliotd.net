// Load projects into the list
document.addEventListener('DOMContentLoaded', function() {
    const projectsList = document.getElementById('projectsList');
    
    projects.forEach(project => {
        const projectItem = document.createElement('a');
        projectItem.className = 'project-item';
        projectItem.href = `project.html?id=${project.id}`;
        
        // Updated with poster and preload optimization
        const mediaHtml = project.video 
            ? `<video class="project-video" 
                      autoplay 
                      loop 
                      muted 
                      playsinline 
                      poster="${project.posterImage || project.thumbnail || ''}" 
                      preload="metadata">
                   <source src="${project.video}" type="video/mp4">
               </video>`
            : '<div class="project-media"></div>';
        
        projectItem.innerHTML = `
            <div class="project-content">
                <div class="project-text">
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                </div>
                <div class="project-media">
                    ${mediaHtml}
                </div>
            </div>
        `;
        
        projectsList.appendChild(projectItem);
    });
    
    // Handle video loading and autoplay
    const videos = document.querySelectorAll('.project-video');
    
    videos.forEach(video => {
        // Ensure smooth playback once loaded
        video.addEventListener('canplay', () => {
            video.play().catch(err => {
                console.log('Autoplay prevented:', err);
            });
        });
    });
});