// Interactive background effect - works on all pages
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.background = 
        `linear-gradient(135deg, 
        hsl(${240 + x * 20}, 70%, ${60 + y * 10}%) 0%, 
        hsl(${270 + x * 20}, 60%, ${50 + y * 10}%) 100%)`;
});