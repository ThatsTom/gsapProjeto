const cards = document.querySelectorAll('.cards');
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

if (window.innerWidth > 10) {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        let xOffset, yOffset;
        if (mouseY < centerY) {
          yOffset = (centerY - mouseY) / 10;
        } else {
          yOffset = -(mouseY - centerY) / 10;
        }
    
        if (mouseX < centerX) {
          xOffset = -(centerX - mouseX) / 10;
        } else {
          xOffset = (mouseX - centerX) / 10;
        }
    
        card.style.transform = `rotateY(${xOffset}deg) rotateX(${yOffset}deg)`;
      });
    
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    
      card.addEventListener('click', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    });
} 