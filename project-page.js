// Load project details based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const projectContent = document.getElementById('projectContent');
    
    if (projectId && projectDetails[projectId]) {
        const project = projectDetails[projectId];
        
        // Update page title
        document.title = `${project.title} - Elliot D'Alessandro`;
        
        // Update Open Graph tags for social sharing
        updateMetaTags(project.title, projectId);
        
        // Build project page HTML
        let html = `
            <div class="project-header" id="content">
                <h1>${project.title}</h1>
            </div>
            
            <div class="project-blog-content">
                ${project.content}
            </div>
        `;
        
        projectContent.innerHTML = html;
        
        // Scroll to content smoothly if hash is present
        if (window.location.hash === '#content') {
            setTimeout(() => {
                document.getElementById('content').scrollIntoView({ behavior: 'instant', block: 'start' });
            }, 0);
        }
        
        // Add click handlers for image modal
        setupImageModal();
    } else {
        projectContent.innerHTML = `
            <div class="project-header">
                <h1>Project Not Found</h1>
            </div>
            <div class="project-blog-content">
                <p>Sorry, the project you're looking for doesn't exist.</p>
            </div>
        `;
    }
});

// Image modal functionality
function setupImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.getElementById('modalClose');
    const images = document.querySelectorAll('.blog-image');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalCaption.textContent = this.alt;
        });
    });
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    // Close modal when clicking background
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Update meta tags for social sharing
function updateMetaTags(projectTitle, projectId) {
    const description = `Check out ${projectTitle} - a project by Elliot D'Alessandro`;
    const url = `https://elliotd.net/project.html?id=${projectId}`;
    const image = `https://elliotd.net/images/${projectId}-preview.jpg`;
    
    // Update or create Open Graph tags
    updateMetaTag('og:title', projectTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', url);
    updateMetaTag('og:image', image);
    
    // Update or create Twitter tags
    updateMetaTag('twitter:title', projectTitle, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image, 'name');
}

function updateMetaTag(property, content, attr = 'property') {
    let element = document.querySelector(`meta[${attr}="${property}"]`);
    if (element) {
        element.setAttribute('content', content);
    } else {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
}