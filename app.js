let currentSection = 0;
const sections = document.querySelectorAll(".fade");
const sectionsContainer = document.querySelector(".sections");
const interval = 5000; // Change this value to adjust the interval (in milliseconds)

function showNextSection() {
  sections[currentSection].classList.remove("fade");
  currentSection = (currentSection + 1) % sections.length;
  sections[currentSection].classList.add("fade");
  sectionsContainer.style.transform = `translateX(-${currentSection * 100}%)`;
}

setInterval(showNextSection, interval);
