// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// ===========================
// SMOOTH SCROLL FOR NAV LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


// ===========================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// ===========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = "";
        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.style.color = "var(--accent)";
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => sectionObserver.observe(sec));