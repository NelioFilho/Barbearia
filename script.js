const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');


leftBtn.addEventListener('click', () => {
  const imgs = document.querySelectorAll('.carousel-img');
  carousel.insertBefore(imgs[imgs.length - 1], imgs[0]);
  updateFocus();
});


rightBtn.addEventListener('click', () => {
  const imgs = document.querySelectorAll('.carousel-img');
  carousel.appendChild(imgs[0]);
  updateFocus();
});
