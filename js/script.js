document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initTicker();
  initContours();
});

document.addEventListener("agrit:langchange", () => {
  initTicker();
});

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function initTicker() {
  const track = document.querySelector(".ticker-track");
  if (!track) return;

  const readings = [
    `${agritT("ticker.moisture")} · 42%`,
    `${agritT("ticker.ndvi")} · 0.68`,
    `${agritT("ticker.rainfall")} · 18mm`,
    `${agritT("ticker.temp")} · 29°C`,
    `${agritT("ticker.humidity")} · 61%`,
    `${agritT("ticker.wind")} · 9 km/h`,
    agritT("ticker.confidence"),
    agritT("ticker.pass")
  ];

  const renderSet = () =>
    readings
      .map((r) => `<span class="ticker-item"><span class="dot"></span>${r}</span>`)
      .join("");

  track.innerHTML = renderSet() + renderSet();
}

function initContours() {
  const targets = document.querySelectorAll(".contour");
  if (!targets.length) return;

  const svg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="46" viewBox="0 0 300 46">
      <path d="M0 23 C 40 5, 80 5, 110 23 S 190 41, 220 23 S 280 5, 300 23"
            fill="none" stroke="#35592E" stroke-width="1.2"/>
      <path d="M0 33 C 40 15, 80 15, 110 33 S 190 51, 220 33 S 280 15, 300 33"
            fill="none" stroke="#C8912E" stroke-width="1"/>
    </svg>
  `);

  targets.forEach((el) => {
    el.style.backgroundImage = `url("data:image/svg+xml,${svg}")`;
  });
}
