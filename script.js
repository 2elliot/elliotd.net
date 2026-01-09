// Load projects into the list
document.addEventListener('DOMContentLoaded', function() {
    const projectsList = document.getElementById('projectsList');
    
    projects.forEach(project => {
        const projectItem = document.createElement('a');
        projectItem.className = 'project-item';
        projectItem.href = `project.html?id=${project.id}`;
        
        const imageHtml = project.image 
            ? `<img src="${project.image}" alt="${project.title}" class="project-image">`
            : '<div class="project-image"></div>';
        
        projectItem.innerHTML = `
            <div class="project-content">
                ${imageHtml}
                <div class="project-text">
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                </div>
            </div>
        `;
        
        projectsList.appendChild(projectItem);
    });
});