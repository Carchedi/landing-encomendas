document.addEventListener('click', (event) => {
  const burger = event.target.closest('.navbar-burger');
  if (!burger) return;
  const menu = document.querySelector('.navbar-menu');
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});
