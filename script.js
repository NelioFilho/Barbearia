const menuBurguer = document.getElementById('menu_burguer');
const menuNav = document.querySelector('.menu');
const closeIcon = document.querySelector('.menu i.fa-xmark');


menuBurguer.addEventListener('click', () => {
  menuNav.classList.toggle('show');
  menuBurguer.style.display = 'none';
})

closeIcon.addEventListener('click', () => {
  menuNav.classList.remove('show');
  menuBurguer.style.display = 'block';
})

const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');


leftBtn.addEventListener('click', () => {
  const imgs = document.querySelectorAll('.carousel .img');
  carousel.insertBefore(imgs[imgs.length - 1], imgs[0]);
});


rightBtn.addEventListener('click', () => {
  const imgs = document.querySelectorAll('.carousel .img');
  carousel.appendChild(imgs[0]);
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu-link');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});