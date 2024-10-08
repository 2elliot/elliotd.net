window.addEventListener('scroll', function() {
  const hero = document.getElementById('hero');
  let scrollPosition = window.pageYOffset;
  console.log(scrollPosition); // Check if this is logging the scroll position

  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
