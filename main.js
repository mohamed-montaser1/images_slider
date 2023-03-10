const prevButton = document.getElementById("prev");

const nextButton = document.getElementById("next");

const sliderImgs = Array.from(
  document.querySelectorAll(".slider-container img")
);

const count = document.querySelector(".count");

let slidesLength = sliderImgs.length;

let currentSlide = 1;

function checker() {
  removeAllActive();
  // Disable Next | Prev Buttons If (Next | Prev) index not defined
  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else if (currentSlide === slidesLength) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
    prevButton.classList.remove("disabled");
  }

  sliderImgs[currentSlide - 1].classList.add("active");
  count.textContent = `Slide #${currentSlide} of ${slidesLength}`;
}

checker();

nextButton.onclick = () => {
  currentSlide++;
  checker();
};

prevButton.onclick = () => {
  currentSlide--;
  checker();
};

function removeAllActive() {
  sliderImgs.forEach((img) => {
    img.classList.remove("active");
  });
}
