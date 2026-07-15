const stage = document.querySelector(".review-stage");
const viewButtons = [...document.querySelectorAll("[data-view]")].filter((node) => node.tagName === "BUTTON");
const notesButton = document.querySelector("[data-notes]");
const closeNotesButton = document.querySelector("[data-close-notes]");
const viewportLabel = document.querySelector("#viewportLabel");

function setView(view) {
  stage.dataset.view = view;
  viewButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  viewportLabel.textContent = view === "mobile" ? "Mobile / 390 × 844" : "Responsive desktop / fit to window";
}

function toggleNotes(forceOpen) {
  const shouldOpen = forceOpen ?? stage.classList.contains("notes-closed");
  stage.classList.toggle("notes-closed", !shouldOpen);
  notesButton.classList.toggle("is-active", shouldOpen);
}

viewButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
notesButton.addEventListener("click", () => toggleNotes());
closeNotesButton.addEventListener("click", () => toggleNotes(false));

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea, select")) return;
  if (event.key.toLowerCase() === "d") setView("desktop");
  if (event.key.toLowerCase() === "m") setView("mobile");
  if (event.key.toLowerCase() === "n") toggleNotes();
});

setView("desktop");
toggleNotes(true);
