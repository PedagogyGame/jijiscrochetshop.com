(() => {
  const params = new URLSearchParams(location.search);
  const slug = params.get("piece") || "";
  const select = document.getElementById("piece-select");
  const title = document.getElementById("custom-title");
  const chip = document.getElementById("piece-chip");
  const note = document.querySelector("textarea[name=note]");
  const pieces = [{"slug":"ducky","title":"Ducky","details":"Cotton amigurumi · ready to ship"},{"slug":"highland-cow","title":"Highland Cow","details":"Cotton amigurumi · ready to ship"},{"slug":"fox-friend","title":"Fox Friend","details":"Chenille yarn · sitting plush"},{"slug":"ballerina-bunny","title":"Ballerina Bunny","details":"Chenille body · cotton dress details"},{"slug":"dragonfruit-dragon","title":"Dragonfruit Dragon","details":"Cotton amigurumi · seated"},{"slug":"rainy-day-duck","title":"Rainy Day Duck","details":"Cotton duck · removable coat"},{"slug":"rainbow-dino","title":"Rainbow Dino","details":"Cotton amigurumi · standing"},{"slug":"flower-crown-cow","title":"Flower Crown Cow","details":"Cotton amigurumi · seated"},{"slug":"blossom-bunnies","title":"Blossom Bunnies","details":"Cotton ornaments · set of two"},{"slug":"bumble-bee","title":"Bumble Bee","details":"Cotton amigurumi · seated"},{"slug":"harvest-bunnies","title":"Harvest Bunnies","details":"Cotton amigurumi · set of two"},{"slug":"cow-coaster","title":"Highland Cow Coaster","details":"Cotton coaster · home"},{"slug":"ocean-friends","title":"Ocean Friends","details":"Cotton ray · chenille shark"},{"slug":"farmhouse-hen","title":"Farmhouse Hen","details":"Cotton amigurumi · palm size"},{"slug":"hanging-sloth","title":"Hanging Sloth","details":"Cotton cozy · hanging"},{"slug":"happy-frog","title":"Happy Frog","details":"Cotton amigurumi · pocket size"}];
  const piece = pieces.find((p) => p.slug === slug);
  if (select && slug) select.value = slug;
  if (piece) {
    if (title) title.textContent = "A " + piece.title + " of your own";
    if (note && !note.value) note.value = "I’d love a custom " + piece.title + ". ";
    if (chip) {
      chip.hidden = false;
      chip.className = "piece-chip";
      chip.innerHTML = '<img src="/images/thumbs/' + piece.slug + '.jpg" alt="">' +
        '<div><p style="margin:0;font-family:var(--display);font-weight:600">' + piece.title + '</p>' +
        '<p class="muted" style="margin:.15rem 0 0">' + piece.details + '</p></div>';
    }
  }
  const form = document.getElementById("custom-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const selected = pieces.find((p) => p.slug === data.get("piece")) ;
    const body = [
      "From: " + name + " <" + email + ">",
      selected ? "Piece: " + selected.title : "Piece: open custom",
      "",
      String(data.get("note") || "").trim(),
    ].join("\n");
    const subject = selected
      ? "Custom order: " + selected.title
      : "Custom order from " + name;
    location.href = "mailto:hello@jijiscrochetshop.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
