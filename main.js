const cards = document.querySelector('.cards');
const cardWidth = document.querySelector('.card').offsetWidth;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++;
    gsap.to(cards, { x: -currentIndex * cardWidth });
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    gsap.to(cards, { x: -currentIndex * cardWidth });
  }
});
