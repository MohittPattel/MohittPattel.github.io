const header = document.querySelector(".site-header");
const progress = document.getElementById("progress");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progress.style.width = max ? `${(window.scrollY / max) * 100}%` : "0%";
});

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const selectedProject = document.getElementById("selectedProject");
const modalMail = document.getElementById("modalMail");

document.querySelectorAll("[data-project]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const project = link.dataset.project;
    selectedProject.textContent = project;
    modalMail.href =
      `mailto:hello@mohitpatel.dev?subject=${encodeURIComponent(project + " — Project Inquiry")}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
