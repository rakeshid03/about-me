/*more details button*/
const container = document.querySelector('.info-box');
 const toggle = document.querySelector('.toggle');
 toggle.addEventListener('click', () => {
 container.classList.toggle('active');});

/*vibration*/
function vibrate(){navigator.vibrate(6)};
