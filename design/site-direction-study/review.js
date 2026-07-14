const directions = {
  journal: { title: "Field Journal", note: "A dark editorial studio page that makes the work feel considered, human, and real." },
  ledger: { title: "Proof Ledger", note: "A muted publication-like system where evidence, scope, and shipped outcomes lead." },
  monograph: { title: "Studio Monograph", note: "A deeper product-studio presence with bold composition and restrained mineral color." }
};

const frame = document.querySelector("#siteFrame");
const openPage = document.querySelector("#openPage");
const title = document.querySelector("#directionTitle");
const note = document.querySelector("#directionNote");
const directionButtons = [...document.querySelectorAll("[data-direction]")];
const viewportButtons = [...document.querySelectorAll("[data-viewport]")];
const stage = document.querySelector("#reviewStage");

function selectDirection(id) {
  const key = directions[id] ? id : "journal";
  directionButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.direction === key));
  title.textContent = directions[key].title;
  note.textContent = directions[key].note;
  const url = `site.html?dir=${key}`;
  frame.src = url;
  openPage.href = url;
  history.replaceState(null, "", `#${key}`);
}

function selectViewport(id) {
  const key = id === "mobile" ? "mobile" : "desktop";
  viewportButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.viewport === key));
  stage.dataset.viewport = key;
}

directionButtons.forEach((button) => button.addEventListener("click", () => selectDirection(button.dataset.direction)));
viewportButtons.forEach((button) => button.addEventListener("click", () => selectViewport(button.dataset.viewport)));
document.addEventListener("keydown", (event) => {
  if (["1", "2", "3"].includes(event.key)) selectDirection(Object.keys(directions)[Number(event.key) - 1]);
});

selectDirection(location.hash.slice(1) || "journal");
