/* ===== EA Digital Assets — Scripts ===== */

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("open");
  document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
});

// Close menu on link click
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// Topbar scroll effect
const topbar = document.getElementById("topbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
  lastScroll = scrollY;
}, { passive: true });

// Scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Respect animation-delay from inline styles
      const delay = entry.target.style.animationDelay;
      if (delay) {
        const ms = parseFloat(delay) * 1000;
        setTimeout(() => entry.target.classList.add("visible"), ms);
      } else {
        entry.target.classList.add("visible");
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
