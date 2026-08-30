const body=document.body;
const themeToggle=document.getElementById("themeToggle");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light") body.classList.add("light");
function updateThemeIcon(){themeToggle.textContent=body.classList.contains("light")?"☀":"☾"}
updateThemeIcon();

themeToggle.addEventListener("click",()=>{
  body.classList.toggle("light");
  localStorage.setItem("portfolio-theme",body.classList.contains("light")?"light":"dark");
  updateThemeIcon();
});

menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
