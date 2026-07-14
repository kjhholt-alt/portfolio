const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector(".site-nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = String(new Date().getFullYear());
