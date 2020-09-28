const carrousel = document.querySelector('.galery');
const carrouselStripe = document.querySelector('.image');
let current = 0;

function handleNextSlide () {
 
  const width = carrousel.clientWidth;
  carrouselStripe.style.transform = 'translate(-' + (width ) + 'px, 0px)';
}