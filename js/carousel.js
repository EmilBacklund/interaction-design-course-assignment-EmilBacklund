const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

console.log(slides);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

// When I click left, move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// When I click right, move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// When I click the nav indicators, move to that slide
dotsNav.addEventListener("click", (event) => {
  // What indicator was clicked on?
  const targetDot = event.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// const slider = document.querySelector(".carousel");
// const mediaQuery = window.matchMedia("(max-width: 414px)");

// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID = 0,
//   currentIndex = 0;

// if (mediaQuery.matches) {
//   slides.forEach((slide, index) => {
//     const slideImage = slide.querySelector("img");
//     slideImage.addEventListener("dragstart", (e) => e.preventDefault());

//     // Touch events
//     slide.addEventListener("touchstart", touchStart(index));
//     slide.addEventListener("touchend", touchEnd);
//     slide.addEventListener("touchmove", touchMove);

//     // Mouse events
//     slide.addEventListener("mousedown", touchStart(index));
//     slide.addEventListener("mouseup", touchEnd);
//     slide.addEventListener("mouseleave", touchEnd);
//     slide.addEventListener("mousemove", touchMove);
//   });
// }

// window.oncontextmenu = function (event) {
//   event.preventDefault();
//   event.stopPropagation();
//   return false;
// };

// function touchStart(index) {
//   return function (event) {
//     currentIndex = index;
//     startPos = getPositionX(event);
//     isDragging = true;

//     animationID = requestAnimationFrame(animation);
//     slider.classList.add("grabbing");
//   };
// }

// function touchEnd() {
//   isDragging = false;
//   cancelAnimationFrame(animationID);
//   const movedBy = currentTranslate - prevTranslate;
//   if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
//   if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
//   setPositionByIndex();
//   slider.classList.remove("grabbing");
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event);
//     currentTranslate = prevTranslate + currentPosition - startPos;
//   }
// }

// function getPositionX(event) {
//   return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
// }

// function animation() {
//   setSliderPosition();
//   if (isDragging) requestAnimationFrame(animation);
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`;
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth;
//   prevTranslate = currentTranslate;
//   setSliderPosition();
// }
