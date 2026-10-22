// Image modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.getElementById('modalClose');
const images = document.querySelectorAll('.blog-image');

images.forEach(img => {
    img.addEventListener('click', function () {
        // Use full resolution image if available, otherwise use current src
        const fullSrc = this.getAttribute('data-full-src') || this.src;
        const altText = this.alt;

        // Preload the full-res image before showing modal
        const loader = new Image();
        loader.onload = function () {
            // Once image is loaded, show it in modal
            modalImg.src = fullSrc;
            modalImg.alt = altText;
            modalCaption.textContent = altText;
            modal.classList.add('active');
        };
        loader.src = fullSrc;
    });
});

// Close modal when clicking X
closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
});

// Close modal when clicking background
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// The header trailer autoplays; if the browser blocks that, the poster still shows
document.querySelectorAll('.project-trailer-video').forEach(video => {
    video.play().catch(() => {});
});
