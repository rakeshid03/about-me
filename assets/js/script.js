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
const socialMediaLinks = document.getElementsByClassName("social-media")[0].getElementsByTagName("a");
let index = 0;

function showLinkWithEffect() {
  if (index < socialMediaLinks.length) {
    socialMediaLinks[index].classList.add("zoom-in-up");
    socialMediaLinks[index].style.display = 'block';
    index++;
    setTimeout(showLinkWithEffect, 200); // 200ms delay
  }
}
showLinkWithEffect();
