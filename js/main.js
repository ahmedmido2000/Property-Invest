// Get the carousel element
var carousel = document.querySelector('.carousel');

// Initialize the carousel with a 5-second interval
var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 1000 // Change slides every 5 seconds
});


document.addEventListener('DOMContentLoaded', function() {
  const contents = document.querySelectorAll('.content');
  const images = document.querySelectorAll('.image-wrapper');
  let currentIndex = 0;
  const intervalTime = 5000; // Change this value to adjust the interval time in milliseconds

  const nextSlide = function() {
      contents[currentIndex].style.display = 'none';
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % contents.length;
      contents[currentIndex].style.display = 'block';
      images[currentIndex].style.display = 'flex';
  };

  const prevSlide = function() {
      contents[currentIndex].style.display = 'none';
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex - 1 + contents.length) % contents.length;
      contents[currentIndex].style.display = 'block';
      images[currentIndex].style.display = 'flex';
  };

  const autoSlide = setInterval(nextSlide, intervalTime);

  document.getElementById('next').addEventListener('click', function() {
      clearInterval(autoSlide);
      nextSlide();
      autoSlide = setInterval(nextSlide, intervalTime);
  });

  document.getElementById('prev').addEventListener('click', function() {
      clearInterval(autoSlide);
      prevSlide();
      autoSlide = setInterval(nextSlide, intervalTime);
  });
});





const myCarousel = document.getElementById('customer-carousel');
  const slides = document.querySelectorAll('.customer-slide');
  const slideCount = slides.length;
  let visibleSlides = calculateVisibleSlides();
  let currentIndex = 0;
  let counter = 100;

  function calculateVisibleSlides() {
    if (window.innerWidth >= 992) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  function updateCarousel() {
    let offset;
    if(window.innerWidth >= 992){
        offset = -(currentIndex * 100 / visibleSlides);
    }
    else if (window.innerWidth >= 768) {
        offset = -(currentIndex * 66.66 / visibleSlides);
      } 
      else {
        offset = -(currentIndex * 33.33 / visibleSlides);
      }
    myCarousel.style.transform = `translateX(${offset}%)`;
  }

  function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex > slideCount - visibleSlides) {
      currentIndex = slideCount - visibleSlides;
    }
    updateCarousel();
  }

  // Add event listener for mouse scroll
  const carouselContainer = document.getElementById('carousel-container');
  let scrollTimeout;

  carouselContainer.addEventListener('wheel', (event) => {
    clearTimeout(scrollTimeout);
      if (event.deltaX < 0) {
        moveSlide(-1);
      } else if (event.deltaX > 0) {
        moveSlide(1);
      }
     // Add a delay to avoid rapid scrolling
  });

   // Update visible slides on window resize
   window.addEventListener('resize', () => {
    visibleSlides = calculateVisibleSlides();
    currentIndex = Math.min(currentIndex, slideCount - visibleSlides);
    updateCarousel();
  });

  // Initial setup
  visibleSlides = calculateVisibleSlides();
  updateCarousel();

  function moreFilters(){
    document.querySelector(".overlay").classList.remove("d-none")
    document.querySelector(".more-filters").classList.remove("d-none")
  }
  
  function closeMoreFilters(){
    document.querySelector(".overlay").classList.add("d-none")
    document.querySelector(".more-filters").classList.add("d-none")
  }

  let showMoreBTN = document.querySelector(".show-more-btn")
  let showLessBTN = document.querySelector(".show-less-btn")
  let checkboxHidden = document.querySelector(".checkbox-hidden")
  function showMoreFunction(){
    showMoreBTN.classList.add("d-none")
    showLessBTN.classList.remove("d-none")
    checkboxHidden.classList.remove("d-none")
  }
  function showLessFunction(){
    showMoreBTN.classList.remove("d-none")
    showLessBTN.classList.add("d-none")
    checkboxHidden.classList.add("d-none")
  }