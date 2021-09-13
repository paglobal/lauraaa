let birthdayAudio;
let musicPlayButton;
let buttonContainer;
let slideshowContainer;
let animatedText;

let confettiSettings = { target: "my-canvas" };
let confetti = new ConfettiGenerator(confettiSettings);

let slideIndex = 0;

const texts = [
  "16",
  "15",
  "14",
  "13",
  "12",
  "11",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let letterTimeout = 20;
let paragraphTimeout = 1000;

window.onload = function () {
  birthdayAudio = document.getElementById("birthday");
  musicPlayButton = document.querySelector(".music-play-button");
  buttonContainer = document.querySelector(".button-container");
  slideshowContainer = document.querySelector(".slideshow-container");
  animatedText = document.querySelector(".animated-text");

  musicPlayButton.addEventListener("click", letTheFunBegin);
};

function letTheFunBegin() {
  setTimeout(type, 1000);
}

function type() {
  buttonContainer.style.display = "none";
  animatedText.style.display = "block";
  birthdayAudio.play();

  if (count === texts.length) {
    proceed();
    return;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".animated-text p").innerHTML = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, paragraphTimeout);
  } else {
    setTimeout(type, letterTimeout);
  }
}

function proceed() {
  animatedText.style.display = "none";
  confetti.render();
  slideshowContainer.style.display = "block";
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    return;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
