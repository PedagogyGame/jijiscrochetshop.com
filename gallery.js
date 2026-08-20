(() => {
  const chips = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("#gallery-grid .card");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;
      chips.forEach((c) => {
        c.classList.toggle("active", c === chip);
        c.setAttribute("aria-selected", String(c === chip));
      });
      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
      });
    });
  });
})();
