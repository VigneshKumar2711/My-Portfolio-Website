// ================== Smooth Scroll with offset ==================
const navHeight = document.querySelector('header').offsetHeight;
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    const offsetTop = section.offsetTop - navHeight + 10;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });
});

// ================== Typed Text Animation ==================
const typedText = document.querySelector(".typed-text");
const phrases = ["D.Vignesh Kumar","Frontend Developer", "React.js Enthusiast", "Creative Coder","Web Developer"];
let currentPhrase = 0;
let currentLetter = 0;
let typing = true;

function type() {
  if (currentLetter <= phrases[currentPhrase].length && typing) {
    typedText.textContent = phrases[currentPhrase].slice(0, currentLetter++);
    setTimeout(type, 120);
  } else {
    typing = false;
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (currentLetter >= 0 && !typing) {
    typedText.textContent = phrases[currentPhrase].slice(0, currentLetter--);
    setTimeout(erase, 60);
  } else {
    typing = true;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

if (typedText) type();

// ================== Contact Form ==================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      alert("Please fill out all fields!");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("✅ Message sent successfully! Thank you for contacting me.");
      form.reset();
    }
  });
}

// ================== Mobile Hamburger Menu ==================
const navToggle = document.createElement("div");
navToggle.classList.add("nav-toggle");
navToggle.innerHTML = "<i class='fas fa-bars'></i>";
document.querySelector("nav").appendChild(navToggle);

const navLinks = document.querySelector("nav ul");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
