const togleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

togleBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  icons.classList.toggle('active');
});