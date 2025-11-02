// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Neon pulse animation
setInterval(() => {
  document.querySelectorAll("h1, h2").forEach(el => {
    el.style.textShadow = `
      0 0 15px #00ffff,
      0 0 30px #ff00ff,
      0 0 45px #00ffff
    `;
  });
}, 1500);
