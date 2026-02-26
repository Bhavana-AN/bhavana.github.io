const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll("[data-reveal]")
  .forEach((el) => observer.observe(el));

const navLinks = document.querySelectorAll("nav a[data-route]");
if (navLinks.length) {
  const current = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    if (link.dataset.route === current) {
      link.classList.add("active");
    }
  });
}
