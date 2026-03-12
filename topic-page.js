document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('id');
    const topicContent = document.getElementById('topicContent');

    if (topicId && topicDetails[topicId]) {
        const topic = topicDetails[topicId];

        document.title = `${topic.title} - Elliot D'Alessandro`;

        topicContent.innerHTML = `
            <div class="project-header" id="content">
                <h1>${topic.title}</h1>
            </div>
            <div class="project-blog-content">
                ${topic.content}
            </div>
        `;
    } else {
        topicContent.innerHTML = `
            <div class="project-header">
                <h1>Page not found.</h1>
            </div>
            <div class="project-blog-content">
                <p>This isn't the page you're looking for.</p>
            </div>
        `;
    }
});
