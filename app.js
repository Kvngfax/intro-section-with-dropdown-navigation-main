const openMenuBtn = document.querySelector('#open');
const closeMenuBtn = document.querySelector('#close');
const navLinks = document.querySelector('#nav-links');
const navLinks2 = document.querySelector('#nav-links-2');

openMenuBtn.addEventListener('click', () => {
  navLinks.classList.add('show');
  navLinks2.classList.add('show');
});

closeMenuBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  navLinks2.classList.add('show');
});
