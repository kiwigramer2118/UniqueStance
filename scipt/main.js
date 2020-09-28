const carrousel = document.querySelector('.galery');
const carrouselStripe = document.querySelector('.image');
let current = 0;

function handleNextSlide () {
  current++;
  if(current >= carrouselStripe.children.length) {
    current = 0;
  }
  const width = carrousel.clientWidth;
  carrouselStripe.style.transform = 'translate(-' + (width * current) + 'px, 0px)';
}