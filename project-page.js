// Load project details based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const projectContent = document.getElementById('projectContent');
    
    if (projectId && projectDetails[projectId]) {
        const project = projectDetails[projectId];
        
        // Update page title
        document.title = `${project.title} - Elliot D'Alessandro`;
        
        // Build project page HTML
        let html = `
            <div class="project-header">
                <h1>${project.title}</h1>
            </div>
            
            <div class="project-description">
                ${project.description}
            </div>
        `;
        
        // Add links if available
        if (project.links && project.links.length > 0) {
            html += '<div class="project-links">';
            project.links.forEach(link => {
                const className = link.primary ? 'project-link' : 'project-link secondary';
                html += `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="${className}">${link.text}</a>`;
            });
            html += '</div>';
        }
        
        // Add technologies if available
        if (project.technologies && project.technologies.length > 0) {
            html += `
                <div class="technologies">
                    <h2>Technologies Used</h2>
                    <div class="tech-list">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
        }
        
        // Add screenshots if available
        if (project.screenshots && project.screenshots.length > 0) {
            html += `
                <div class="project-screenshots">
                    <h2>Project Screenshots</h2>
            `;
            
            project.screenshots.forEach((screenshot, index) => {
                html += `
                    <img src="${screenshot}" alt="${project.title} screenshot ${index + 1}" class="screenshot">
                `;
            });
            
            html += '</div>';
        }
        
        projectContent.innerHTML = html;
    } else {
        projectContent.innerHTML = `
            <div class="project-header">
                <h1>Project Not Found</h1>
            </div>
            <div class="project-description">
                <p>Oops! Something went wrong. <br> The project you're looking for doesn't exist.</p>
            </div>
        `;
    }
});