document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add('visible');
    }
  });
});
