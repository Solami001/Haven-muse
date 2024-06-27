document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = {
        'index.html': 'home-link',
        'about.html': 'about-link',
        'portfolio.html': 'portfolio-link',
        'contact.html': 'contact-link'
    };

    if (navLinks[currentPage]) {
        document.getElementById(navLinks[currentPage]).classList.add('active');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const navbarIcon = document.getElementById('navbar-icon');
    const menuIcon = document.getElementById('menu-icon');
    const cancelIcon = document.getElementById('cancel-icon');
    const sidebar = document.getElementById('sidebar');

    navbarIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('hidden');
        cancelIcon.classList.toggle('hidden');
        sidebar.classList.toggle('hidden-sidebar');

        if (menuIcon.classList.contains('hidden')) {
            menuIcon.classList.add('animate-spin');
        } else {
            menuIcon.classList.remove('animate-spin');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const goBackBtn = document.getElementById('goBack');
    const continueChatBtn = document.getElementById('continueChat');
    
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    portfolioImages.forEach(image => {
        image.addEventListener('click', function() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
    


    goBackBtn.onclick = function() {
        modal.classList.add('hidden');
    }

    continueChatBtn.onclick = function() {
        const phoneNumber = '2347061841293'; // Replace with your WhatsApp number
        const message = encodeURIComponent('Hello, I am interested in your portfolio.');
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    }
});



let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID = 0;
let currentIndex = 0;
const slides = document.querySelectorAll('#carouselTrack > div');
const intervalTime = 10000; // 10 seconds
let autoScrollInterval;

const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  moveToPrevSlide();
  resetAutoScroll();
});
nextBtn.addEventListener('click', () => {
  moveToNextSlide();
  resetAutoScroll();
});

carouselTrack.addEventListener('mousedown', startDrag);
carouselTrack.addEventListener('touchstart', startDrag);

carouselTrack.addEventListener('mouseup', endDrag);
carouselTrack.addEventListener('touchend', endDrag);

carouselTrack.addEventListener('mousemove', drag);
carouselTrack.addEventListener('touchmove', drag);

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function startDrag(event) {
  if (event.target.tagName === 'IMG') {
    return; // Prevent dragging on image click
  }
  isDragging = true;
  startPosition = getPositionX(event);
  animationID = requestAnimationFrame(animation);
  carouselTrack.style.transition = 'none';
  cancelAutoScroll();
}

function drag(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPosition;
  }
}

function endDrag() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  // Calculate index based on currentTranslate and slide width
  const slideWidth = slides[0].offsetWidth;
  const newIndex = Math.round(-currentTranslate / slideWidth);

  // Wrap around logic
  if (newIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (newIndex >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = newIndex;
  }

  currentTranslate = -currentIndex * slideWidth;
  carouselTrack.style.transition = 'transform 0.3s ease-in-out';
  setSliderPosition();
  resetAutoScroll();
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
  previousTranslate = currentTranslate;
}

function moveToPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  currentTranslate = -currentIndex * slides[0].offsetWidth;
  carouselTrack.style.transition = 'transform 0.3s ease-in-out';
  setSliderPosition();
}

function moveToNextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  currentTranslate = -currentIndex * slides[0].offsetWidth;
  carouselTrack.style.transition = 'transform 0.3s ease-in-out';
  setSliderPosition();
}

// Auto-scroll function
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    moveToNextSlide();
  }, intervalTime);
}

// Cancel auto-scroll
function cancelAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Reset auto-scroll (useful when interacting with buttons)
function resetAutoScroll() {
  cancelAutoScroll();
  startAutoScroll();
}

// Start auto-scrolling
startAutoScroll();




document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden-element');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        } else {
          entry.target.classList.remove('show-element');
        }
      });
    });

    hiddenElements.forEach(element => {
      observer.observe(element);
    });
  });
  

