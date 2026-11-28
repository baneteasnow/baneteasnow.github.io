const filters = document.querySelectorAll("#filters button");
const cards = Array.from(document.querySelectorAll("#grid .card"));
const empty = document.querySelector("#empty");
const modal = document.querySelector("#modal");
const large = document.querySelector("#large");
const detail = document.querySelector("#detail");
const story = document.querySelector("#story");

function openImage(src, alt, caption) {
  large.src = src;
  large.alt = alt;
  detail.textContent = caption;
  modal.showModal();
}

for (const filter of filters) {
  filter.addEventListener("click", () => {
    for (const button of filters) {
      const active = button === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    }

    const category = filter.dataset.category;
    for (const card of cards) {
      card.hidden = Boolean(category) && !JSON.parse(card.dataset.tags).includes(category);
    }
    empty.hidden = cards.some((card) => !card.hidden);
  });
}

for (const card of cards) {
  const image = card.querySelector("img");
  card.addEventListener("click", () => {
    openImage(image.src, image.alt, card.dataset.caption);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
}

story.addEventListener("click", () => {
  openImage(story.dataset.image, story.dataset.caption, story.dataset.caption);
});
