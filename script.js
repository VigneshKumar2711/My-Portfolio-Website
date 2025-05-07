// Smooth Scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});


const typedText = document.querySelector(".typed-text");
const phrases = ["D.Vignesh Kumar","Frontend Developer", "React.js Enthusiast", "Creative Coder","Web Developer"];
let currentPhrase = 0;
let currentLetter = 0;

function type() {
  if (currentLetter <= phrases[currentPhrase].length) {
    typedText.textContent = phrases[currentPhrase].slice(0, currentLetter++);
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (currentLetter >= 0) {
    typedText.textContent = phrases[currentPhrase].slice(0, currentLetter--);
    setTimeout(erase, 50);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

if (typedText) {
  type();
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields!");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else {
      alert("Message sent successfully!");
      form.reset();
    }
  });
}



