/*more details button*/
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

/*vibration*/
function vibrate() {
  navigator.vibrate(6);
}

// Zoom in up effect add in every social media button one by one
const socialMediaLinks = document.querySelectorAll(".social-media div");

// ON SCROLL REVEAL SMALL CARDS
ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9,
});

// on load name effect 
setTimeout(() => document.querySelector('.name').classList.add('loaded'), 500);
